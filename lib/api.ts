import { DEFAULT_LOCALE } from 'configs/constants'
import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

const WORDS_PER_MINUTE = 225

const postsDirectory = join(process.cwd(), 'posts')

export const readingTime = (text: string) =>
  Math.ceil(text.trim().split(/\s+/).length / WORDS_PER_MINUTE)

export function getPostSlugs(locale: string) {
  return fs.readdirSync(`${postsDirectory}/${locale}`)
}

export type Items = {
  title?: string
  slug?: string
  date: string
  thumbnail?: string
  timeToRead?: number
  content?: string
  [key: string]: string | number | undefined
}

export function getPostBySlug(
  slug: string,
  fields: string[] = [],
  locale: string = DEFAULT_LOCALE
) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(`${postsDirectory}/${locale}`, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: Items = { date: '', locale }

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }

    if (field === 'content') {
      items[field] = content
    }

    if (field === 'timeToRead') {
      items[field] = readingTime(content)
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items as Items
}

export function getAllPosts(fields: string[] = [], locales = [DEFAULT_LOCALE]) {
  let posts: Items[] = []

  locales.forEach((locale) => {
    const slugs = getPostSlugs(locale)
    const postsBySlug = slugs
      .map((slug) => getPostBySlug(slug, fields, locale))
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    posts = [...posts, ...postsBySlug]
  })

  return posts
}
