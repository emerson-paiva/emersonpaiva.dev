import { getAllPosts, getPostBySlug } from 'lib/api'
import markdownToHtml from 'lib/markdownToHtml'
import Head from 'next/head'

import * as S from 'components/Post'
import { DEFAULT_LOCALE } from 'configs/constants'

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
        <title>{`${post.title} | Emerson Paiva`}</title>
        <meta name="description" content={post.excerpt} />
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
  locale: string
}

export async function getStaticProps({
  params,
  locale = DEFAULT_LOCALE,
}: Params) {
  const formattedLocale = locale.split('-')[0]

  const post = getPostBySlug(
    params.slug,
    ['title', 'date', 'slug', 'content', 'thumbnail'],
    formattedLocale
  )
  const content = await markdownToHtml(post.content || '')

  return { props: { post: { ...post, content } } }
}

type GetStaticPaths = {
  locales: string[]
}

export async function getStaticPaths({ locales }: GetStaticPaths) {
  const posts = getAllPosts(['slug'], locales)

  return {
    paths: posts.map(({ slug, locale }) => ({ params: { slug, locale } })),
    fallback: true,
  }
}

export default BlogPost
