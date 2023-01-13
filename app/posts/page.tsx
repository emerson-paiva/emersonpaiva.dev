import Link from 'next/link';
import { getPosts } from '../../features/posts/services/Posts';

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
