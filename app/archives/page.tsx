import { MainLayout } from '@/components/main-layout';
import { PostArchived } from '@/components/posts-archived';
import { getPostsMeta } from '@/lib/get-posts-meta';
import { sortPosts } from '@/lib/utils';
import { Fragment, useMemo } from 'react';

export default async function ArchivePage() {

  const allPosts = await getPostsMeta();

  const sortedPosts = sortPosts(allPosts);
  let prev_year = 0;
  let _posts = [];

  for (let postMeta of sortedPosts) {
    const year = new Date(postMeta.date).getFullYear();
    let isAnotherYear = year !== prev_year;
    if (isAnotherYear) {
      prev_year = year;
      _posts.push(
        <Fragment key={postMeta.url}>
          <h3>{year}</h3>
          <PostArchived postMeta={postMeta} />
        </Fragment>,
      );
    } else {
      _posts.push(<PostArchived postMeta={postMeta} key={postMeta.url} />);
    }
  }

  return (
    <MainLayout>
      <h2>归档</h2>
      {_posts}
    </MainLayout>
  );
}
