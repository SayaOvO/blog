'use client';

import Link from 'next/link';
import scrollIntoView from 'scroll-into-view-if-needed';

import { useActiveAnchor } from '@/contexts/active-anchor';
import { Toc as TocType } from '@/types/toc';
import * as stylex from '@stylexjs/stylex';
import { useEffect, useRef } from 'react';
import { colors, shadows, text } from '../app/globalTokens.stylex';

interface TocProps {
  toc: TocType;
}

const margins = ['0px', '8px', '16px', '24px', '32px', '40px', '48px'];
export function Toc({ toc }: TocProps) {
  const activeLink = useActiveAnchor(toc);
  const tocRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeLink) return;
    const anchor = tocRef?.current?.querySelector(
      `a[href="#${activeLink.slug}"]`,
    );

    if (anchor) {
      scrollIntoView(anchor, {
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
        scrollMode: 'always',
        boundary: tocRef.current,
      });
    }
  }, [activeLink]);

  return (
    <div {...stylex.props(styles.toc)} ref={tocRef}>
      <div {...stylex.props(styles.label)}>目录</div>
      <ul {...stylex.props(styles.ul)}>
        {toc.map((heading) => (
          <li
            key={heading.slug}
            style={{
              paddingLeft: margins[heading.depth],
            }}
          >
            <Link
              href={`#${heading.slug}`}
              {...stylex.props(
                styles.link,
                heading.slug === activeLink?.slug && styles.activeLink,
              )}
            >
              {heading.value}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = stylex.create({
  toc: {
    height: '120px',
    overflow: 'scroll',
    backgroundColor: colors.bg1,
    borderRadius: '6px',
    boxShadow: shadows.main,
    '::-webkit-scrollbar': {
      height: '.28rem',
      width: '.35rem',
    },
    marginBlock: '30px',
    '::-webkit-scrollbar-thumb': {
      backgroundColor: colors.secondary,
      borderRadius: '.5rem',
    },
    display: {
      '@media (max-width: 769px)': 'none',
    },
  },
  ul: {
    listStyleType: 'none',
    padding: 0,
    marginBlock: '8px',
  },
  label: {
    paddingInline: '10px',
    paddingTop: '10px',
    color: colors.title,
  },
  link: {
    display: 'block',
    color: colors.primary,
    fontSize: text.sm,
    padding: '6px',
    backgroundColor: {
      default: null,
      ':hover': colors.hoverBg,
    },
    borderRadius: '6px',
  },
  activeLink: {
    color: 'rgb(66, 99, 235)',
  },
});
