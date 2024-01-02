import { colors, shadows, spacing, text } from "../app/globalTokens.stylex";
import * as stylex from "@stylexjs/stylex";
import Image from "next/image";
import Link from "next/link";

interface FriendCardProps {
  name: string;
  avatarUrl: string;
  slogan?: string;
  link: string;
}

export function FriendCard({ name, avatarUrl, slogan, link }: FriendCardProps) {
  return (
    <Link href={link} {...stylex.props(styles.card)}>
      <div>
          <div {...stylex.props(styles.info)}>
            <h2 {...stylex.props(styles.name)}>{name}</h2>
            <Image
              src={avatarUrl}
              width={50}
              height={50}
              alt={`${name}'s avatar`}
              {...stylex.props(styles.avatar)}
            />
          </div>
          {slogan && <p {...stylex.props(styles.slogan)}>{slogan}</p>}
      </div>
    </Link>
  );
}

const styles = stylex.create({
  card: {
    padding: spacing.sm,
    borderRadius: spacing.xxs,
    border: "1px solid #e6dcd3",
    boxShadow: shadows.main,
  },
  h2: {
    fontSize: text.p,
    margin: 0,
  },
  avatar: {
    width: text.h5,
    height: text.h5,
    borderRadius: text.h5,
  },
  info: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontSize: text.sm,
  },
  slogan: {
    color: colors.title,
    marginBlock: spacing.xs,
  }
});
