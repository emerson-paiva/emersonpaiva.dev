import { getAllPosts, getPostBySlug } from 'lib/api'
import markdownToHtml from 'lib/markdownToHtml'
import Head from 'next/head'

import * as S from 'components/Post'

type BlogPostProps = {
  post: {
    title: string
    thumbnail: string
    slug: string
    content: string
    excerpt: string
    tags: string[]
  }
}

const BlogPost = ({ post }: BlogPostProps) => {
  if (!post?.slug) {
    return <span>Error</span>
  }

  return (
    <>
      <Head>
        <title>{post.title} | Emerson Paiva</title>
        <meta name="description" content={post.excerpt} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <S.Cover src={post.thumbnail} /> */}
      {/* <S.CoverCredit>
        Capa:{' '}
        <a href={coverCredits?.link} target="_blank">
          {coverCredits?.name}
        </a>
      </S.CoverCredit> */}
      {/* <S.PostExcerpt dangerouslySetInnerHTML={{ __html: excerpt }} /> */}

      <S.PostTitleWrapper>
        <span />
        <S.PostTitle>{post.title}</S.PostTitle>
        <S.PostTagsAndTime>
          <S.Tags>
            {post.tags?.map((tag) => (
              <S.Tag key={tag}>#{tag}</S.Tag>
            ))}
          </S.Tags>
        </S.PostTagsAndTime>
      </S.PostTitleWrapper>
      <S.PostView>
        {/* TODO add timeToRead style */}
        {/* {getTimeToRead(timeToRead)} */}
        <S.PostExcerpt dangerouslySetInnerHTML={{ __html: post.excerpt }} />
        <S.PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
        {/* <Comments title={title} slug={slug} /> */}
      </S.PostView>
    </>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'thumbnail',
  ])
  const content = await markdownToHtml(post.content || '')

  return { props: { post: { ...post, content } } }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  }
}

export default BlogPost
