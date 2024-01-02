import { Toc as TocType } from "@/types/toc";
import Link from "next/link";
import * as stylex from "@stylexjs/stylex";
import { colors, shadows, text } from "../app/globalTokens.stylex";

interface TocProps {
  toc: TocType;
}

const styles = stylex.create({
  toc: {
    height: "80px",
    overflow: "scroll",
    backgroundColor: colors.bg1,
    borderRadius: "6px",
    boxShadow: shadows.main,
    "::-webkit-scrollbar": {
      height: ".28rem",
      width: ".35rem",
    },
    marginBlock: "30px",
    "::-webkit-scrollbar-thumb": {
      backgroundColor: colors.secondary,
      borderRadius: ".5rem",
    },
    display: {
      "@media (max-width: 769px)": "none"
    }
  },
  ul: {
    listStyleType: "none",
    padding: 0,
    marginBlock: "8px"
  },
  label: {
    paddingInline: "10px",
    paddingTop: "10px",
    color: colors.title
  },
  link: {
    display: "block",
    color: colors.primary,
    fontSize: text.sm,
    padding: "6px",
    backgroundColor: {
      default: null,
      ":hover": colors.hoverBg,
    },
    borderRadius: "6px"
  }
});

const margins = ["0px", "8px", "16px", "24px", "32px", "40px", "48px"];
export function Toc({ toc }: TocProps) {
  return (
    <div {...stylex.props(styles.toc)}>
      <div {...stylex.props(styles.label)}>目录</div>
      <ul {...stylex.props(styles.ul)}>
        {toc.map((heading) => (
          <li
            key={heading.url}
            style={{
              paddingLeft: margins[heading.depth],
            }}
          >
            <Link href={heading.url} {...stylex.props(styles.link)}
            >
              {heading.value}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
