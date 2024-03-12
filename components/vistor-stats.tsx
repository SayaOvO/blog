'use client';

import * as stylex from '@stylexjs/stylex';
import { useEffect } from 'react';
import useSWR from 'swr';
import { colors, spacing, text } from '../app/globalTokens.stylex';

const apiURL = 'https://visitor-worker.sayaovo.workers.dev/';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};
export function VistorsStats() {
  const { data } = useSWR(apiURL, fetcher);

  useEffect(() => {
    fetch(apiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }, []);

  return (
    <>
      {data ? <p {...stylex.props(styles.p)}>All my blog visitors: {data.views}</p>
 : null}
    </>
  )
}

const styles = stylex.create({
  p: {
    textAlign: 'center',
    marginBlock: spacing.xxxs,
    lineHeight: 1,
    color: colors.primary,
  },
});
