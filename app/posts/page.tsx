import { getPosts } from '@features/posts/services/Posts';
import Link from 'next/link';

const PostsPage = () => {
  const posts = getPosts();

  return (
    <>
      {posts.map(({ slug }) => (
        <Link key={slug} href={`/posts/${slug}`}>
          {slug}
        </Link>
      ))}
    </>
  );
};

export default PostsPage;
