import { PostCard } from "@/components/post-card";
import { getAllMeta, getCompiledPost } from "@/lib/get-all-meta";
import { notFound } from "next/navigation";
import styles from "./post-page.module.css";
import { MobileToc } from "@/components/mobile-toc";

const PostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  try {
    const { slug } = await params;
    const { content, meta } = await getCompiledPost(slug);

    return (
      <main className="main-area post-main">
        <section>
          <PostCard meta={meta} fetchPriority={true} />
        </section>
        <article className={`${styles.contents} flow`}>{content}</article>
        <MobileToc toc={meta.toc} />
      </main>
    );
  } catch {
    notFound();
  }
};

export const generateStaticParams = async () => {
  const allPosts = await getAllMeta();
  return allPosts.map((post) => ({
    slug: post.meta.slug,
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const posts = await getAllMeta();
  const { slug } = await params;
  const post = posts.find((post) => post.meta.slug === slug);

  if (!post) {
    notFound();
  }
  return {
    title: post.meta.title,
    description: post.meta.description,
    keywords: post.meta.categories.join(", "),
    openGraph: {
      title: post.meta.title,
      url: `/${post.meta.slug}`,
      description: post.meta.description,
      images: [{ url: `/${post.meta.banner}` }],
    },
    twitter: {
      title: post.meta.title,
      description: post.meta.description,
      creator: "@sayyaOvO",
      creatorId: "@SayyaOvO",
    },
  };
};

export default PostPage;
