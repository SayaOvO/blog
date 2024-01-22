import { allPosts } from '@/.contentlayer/generated';
import { MainLayout } from '@/components/main-layout';
import { PostArchived } from '@/components/posts-archived';
import { sortPosts } from '@/lib/utils';
import { Fragment, useMemo } from 'react';

export default function ArchivePage() {
  const sortedPosts = sortPosts(allPosts);
  let prev_year = 0;
  let _posts = [];

  for (let post of sortedPosts) {
    const year = new Date(post.date).getFullYear();
    let isAnotherYear = year !== prev_year;
    if (isAnotherYear) {
      prev_year = year;
      _posts.push(
        <Fragment key={post._id}>
          <h3>{year}</h3>
          <PostArchived post={post} />
        </Fragment>,
      );
    } else {
      _posts.push(<PostArchived post={post} key={post._id} />);
    }
  }

  return (
    <MainLayout>
      <h2>归档</h2>
      {_posts}
    </MainLayout>
  );
}
