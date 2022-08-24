import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const WORDS_PER_MINUTE = 225

const postsDirectory = join(process.cwd(), 'posts')

export const readingTime = (text: string) =>
  Math.ceil(text.trim().split(/\s+/).length / WORDS_PER_MINUTE)

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

type Items = {
  title?: string
  slug?: string
  date: string
  thumbnail?: string
  timeToRead?: number
  content?: string
  [key: string]: string | number | undefined
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: Items = { date: '' }

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

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
