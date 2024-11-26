import { PostCard } from "@/components/post-card";
import { getAllMeta } from "@/lib/get-all-meta";

export default async function Home() {
  const posts = await getAllMeta();
  return (
    <main className="main-area flow">
      {posts.map(({ meta }, index) => (
        <section key={meta.title} className="bg-accent shadow-md br-2">
          <PostCard meta={meta} fetchPriority={index === 0} />
        </section>
      ))}
    </main>
  );
}
