import html from 'remark-html'
import headings from 'remark-autolink-headings'
import slug from 'remark-slug'
// @ts-ignore
import remarkOembed from 'remark-oembed'
import { remark } from 'remark'

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html)
    .use(remarkOembed)
    .use(slug)
    .use(headings, {
      behavior: 'wrap',
      linkProperties: {
        className: 'anchor',
      },
    })
    .process(markdown)

  return result.toString()
}
