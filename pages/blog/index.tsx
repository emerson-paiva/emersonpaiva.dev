import { BlogList } from 'components/BlogList'
import { HomePage } from 'components/Pages/HomePage'
import { getAllPosts } from 'lib/api'
import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DEFAULT_LOCALE } from 'configs/constants'
import Head from 'next/head'

type Posts = {
  title: string
  slug: string
  date: string
  thumbnail: string
  timeToRead: number
}

type BlogProps = {
  allPosts: Posts[]
}

const Blog = ({ allPosts }: BlogProps & NextPage) => (
  <>
    <Head>
      <title>Blog | Emerson Paiva</title>
      <meta name="description" content="Blog posts list" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <HomePage>
      <BlogList posts={allPosts} />
    </HomePage>
  </>
)

type GetStaticProps = {
  locale: string
}

export const getStaticProps = async ({
  locale = DEFAULT_LOCALE,
}: GetStaticProps) => {
  const formattedLocale = locale.split('-')[0]

  const allPosts = getAllPosts(
    ['title', 'date', 'slug', 'thumbnail', 'timeToRead'],
    [formattedLocale]
  )

  return {
    props: {
      allPosts,
      ...(await serverSideTranslations(locale, ['bio'])),
    },
  }
}

export default Blog
