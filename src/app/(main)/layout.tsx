import { Sidebar } from "@/components/sidebar";
import { RightSidebar } from "@/components/sidebar/right-sidebar";
import { getAllMeta } from "@/lib/get-all-meta";
import { getCategoriesTags } from "@/lib/get-categories-tags";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const posts = await getAllMeta();
  const categoriesTags = getCategoriesTags(posts);
  return (
    <div className="container main-layout-container">
      <Sidebar categoriesTags={categoriesTags} />
      {children}
      <RightSidebar />
    </div>
  );
};

export default MainLayout;
