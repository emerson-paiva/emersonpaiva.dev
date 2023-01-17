import { getAllPosts, getPostBySlug } from 'lib/api'
import Head from 'next/head'
import Prism from 'prismjs'
import { DEFAULT_LOCALE } from 'configs/constants'
import { useEffect } from 'react'

import ReactMarkdown from 'react-markdown'
import remarkHeadings from 'remark-autolink-headings'
import remarkSlug from 'remark-slug'
import * as S from 'components/Post'

require('prismjs/components/prism-javascript')
require('prismjs/components/prism-css')
require('prismjs/components/prism-jsx')

type BlogPostProps = {
  post: {
    title?: string
    thumbnail?: string
    slug?: string
    content?: string
    excerpt?: string
    tags?: string[]
  }
  markdown: string
}

const BlogPost = ({
  post: { title = '', slug = '', excerpt = '', tags = [] } = {},
  markdown = '',
}: BlogPostProps) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [slug])

  return (
    <>
      <Head>
        <title>{`${title} | Emerson Paiva`}</title>
        <meta name="description" content={excerpt} />
      </Head>

      {/* <S.Cover src={thumbnail} /> */}
      {/* <S.CoverCredit>
        Capa:{' '}
        <a href={coverCredits?.link} target="_blank">
          {coverCredits?.name}
        </a>
      </S.CoverCredit> */}
      {/* <S.PostExcerpt dangerouslySetInnerHTML={{ __html: excerpt }} /> */}

      <S.PostTitleWrapper>
        <span />
        <S.PostTitle>{title}</S.PostTitle>
        <S.PostTagsAndTime>
          <S.Tags>
            {tags?.map((tag) => (
              <S.Tag key={tag}>#{tag}</S.Tag>
            ))}
          </S.Tags>
        </S.PostTagsAndTime>
      </S.PostTitleWrapper>
      <S.PostView>
        {/* TODO add timeToRead style */}
        {/* {getTimeToRead(timeToRead)} */}
        <S.PostExcerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
        {/* <S.PostContent dangerouslySetInnerHTML={{ __html: content }} /> */}
        <S.PostContent>
          <ReactMarkdown remarkPlugins={[remarkSlug, remarkHeadings]}>
            {markdown}
          </ReactMarkdown>
        </S.PostContent>
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
  // const content = await markdownToHtml(post.content || '')

  return { props: { post, markdown: post.content } }
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
