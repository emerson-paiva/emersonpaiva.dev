import { getAllPosts, getPostBySlug } from 'lib/api'
import markdownToHtml from 'lib/markdownToHtml'

type BlogPostProps = {
  post: {
    title: string
    slug: string
    content: string
  }
}

const BlogPost = ({ post }: BlogPostProps) => {
  if (!post?.slug) {
    return <span>Error</span>
  }

  return (
    <article>
      <div>{post.title}</div>
      <div>{post.content}</div>
    </article>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'content'])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default BlogPost
