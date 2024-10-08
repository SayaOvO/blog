import { Sidebar } from "@/components/sidebar";
import { getCompiledPost } from "@/lib/get-all-meta";

const PostPageLayout = async ({
  params,
  children,
}: {
  params: { slug: string };
  children: React.ReactNode;
}) => {
  const post = await getCompiledPost(params.slug);
  return (
    <div className="container main-layout-container post-page">
      <Sidebar post={post} />
      {children}
    </div>
  );
};

export default PostPageLayout;
