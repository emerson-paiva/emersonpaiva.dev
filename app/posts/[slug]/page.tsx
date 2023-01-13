import Markdown from 'markdown-to-jsx';

import {
  getPostBySlug,
  getPosts,
} from '../../../features/posts/services/Posts';

type PostPageParams = {
  params: {
    slug: string;
  };
};

const PostPage = ({ params }: PostPageParams) => {
  const post = getPostBySlug(params?.slug);

  return (
    <>
      <article className='prose'>
        <Markdown>{post.content}</Markdown>
      </article>
    </>
  );
};

export const generateStaticParams = async () => {
  return getPosts().map(({ slug }) => ({ slug }));
};

export default PostPage;
