import * as stylex from "@stylexjs/stylex";
import { colors, shadows, spacing, text } from "../../app/globalTokens.stylex";
import { getCategories, getTags } from "@/lib/utils";
import { generateRandomColor } from "@/lib/generate-random-color";
import Link from "next/link";
import { getPostsMeta } from "@/lib/get-posts-meta";

export async function TagsAndCategories() {
  const postsMeta = await getPostsMeta();
  const tags = getTags(postsMeta);
  const categories = getCategories(postsMeta);
  return (
    <div {...stylex.props(styles.container)}>
      <div>标签</div>
      <div {...stylex.props(styles.tags)}>
        {tags.map((tag) => (
          <Link
            href={`/tags/${tag}`}
            {...stylex.props(styles.item())}
            key={tag}
          >
            {tag}
          </Link>
        ))}
      </div>
      <div>分类</div>
      <div {...stylex.props(styles.categories)}>
        {categories.map((category) => (
          <Link
            href={`/categories/${category}`}
            {...stylex.props(styles.item())}
            key={category}
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}

const styles = stylex.create({
  container: {
    backgroundColor: colors.bg1,
    marginBlock: "30px",
    borderRadius: "6px",
    boxShadow: shadows.main,
    padding: "16px",
    maxWidth: "350px",
  },
  item: () => ({
    padding: spacing.xxxs,
    backgroundColor: "#ece9e6",
    color: generateRandomColor(),
    borderRadius: spacing.xxxs,
  }),
  tags: {
    display: "flex",
    marginBlock: spacing.xxs,
    gap: "3px",
    flexWrap: "wrap"
  },
  categories: {
    display: "flex",
    marginBlock: spacing.xxs,
    gap: "3px",
    flexWrap: "wrap"
  },
});
