import { Sidebar } from "@/components/sidebar";
import { getCompiledPost } from "@/lib/get-all-meta";

const PostPageLayout = async ({
  params,
  children,
}: {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
}) => {
  const { slug } = await params;
  const post = await getCompiledPost(slug);
  return (
    <div className="container main-layout-container post-page">
      <Sidebar post={post} />
      {children}
    </div>
  );
};

export default PostPageLayout;
