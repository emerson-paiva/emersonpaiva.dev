import { PostItem } from 'components/PostItem'

import * as S from './styled'

export type Post = {
  date: string
  slug: string
  thumbnail: string
  title: string
  timeToRead: number
}

export type BlogListProps = {
  posts: Post[]
}

export const BlogList = ({ posts }: BlogListProps) => (
  <>
    <S.PostsWrapper>
      {posts?.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </S.PostsWrapper>
    {/* TODO: */}
    {/* <S.BlogLink to="/blog">add pagination</S.BlogLink> */}
  </>
)
