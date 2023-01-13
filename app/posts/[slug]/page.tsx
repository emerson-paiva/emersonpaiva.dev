import fs, { readdirSync } from 'fs';
// import { getPostMetadata } from '../../page';

const getPostMetadata = () => {
  const files = readdirSync('posts/');
  const slugs = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace('.md', ''));

  return slugs;
};

const getPostContent = (slug: string) => {
  const content = fs.readFileSync(`posts/${slug}.md`, 'utf-8');

  return content;
};

type PostPageParams = {
  params: {
    slug: string;
  };
};

const PostPage = ({ params }: PostPageParams) => {
  const post = getPostContent(params?.slug);
  return <h1>{post}</h1>;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();

  return posts.map((slug) => ({ slug }));
};

export default PostPage;
