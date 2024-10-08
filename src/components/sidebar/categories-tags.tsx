interface CategoriesAndTagsProps {
  categoriesTags: {
    categories: string[];
    tags: string[];
  };
}

export const CategoriesAndTags = ({
  categoriesTags,
}: CategoriesAndTagsProps) => {
  return (
    <section className="flow bg-accent shadow-md br-1 p-4">
      <h3 className="section-label">标签</h3>
      <ul className="flex">
        {categoriesTags.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <h3 className="section-label">分类</h3>

      <ul className="flex">
        {categoriesTags.categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
    </section>
  );
};
