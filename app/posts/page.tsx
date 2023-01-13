import fs from 'fs';
import Link from 'next/link';

const getPostMetadata = () => {
  const files = fs.readdirSync('posts/');
  const slugs = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace('.md', ''));

  return slugs;
};

const PostPage = () => {
  const post = getPostMetadata();
  return (
    <div>
      {post.map((slug) => (
        <Link key={slug} href={`/posts/${slug}`}>
          {slug}
        </Link>
      ))}
    </div>
  );
};

export default PostPage;
