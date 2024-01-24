import { FriendCard } from '@/components/friend-card';
import * as stylex from '@stylexjs/stylex';
import { colors, spacing, text } from '../globalTokens.stylex';

export default function FriendPage() {
  return (
    <main>
      <h1 {...stylex.props(styles.h1)}>Friends</h1>
      <div {...stylex.props(styles.cards)}>
        {new Array(8).fill(0).map((_, idx) => (
          <FriendCard
            key={idx}
            name='saya'
            avatarUrl='/avatar.png'
            slogan='practices make perfect'
            link='#'
          />
        ))}
      </div>
    </main>
  );
}

const styles = stylex.create({
  cards: {
    display: 'flex',
    gap: spacing.sm,
    flexWrap: 'wrap',
    paddingInline: spacing.xl,
  },
  card: {
    border: '1px solid red',
    width: '200px',
    minHeight: '160px',
    padding: spacing.sm,
    borderRadius: spacing.xs,
  },
  h1: {
    padding: spacing.lg,
    margin: 0,
    fontSize: text.h5,
  },
  h2: {
    fontSize: text.p,
    color: colors.primary,
  },
  slogan: {
    padding: spacing.xxs,
    borderLeft: '2px solid blue',
    backgroundColor: 'rgba(242, 252, 254, 0.5)',
    margin: 0,
    marginBlock: spacing.xxs,
    fontSize: text.sm,
  },
});
