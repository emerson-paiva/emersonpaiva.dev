import { PostItem } from 'components/PostItem'
import * as S from './styled'

export const PostsList = ({ posts }: any) => {
  return (
    <>
      <S.PostsWrapper>
        {posts?.map((post: any) => (
          <PostItem key={post.fields.slug} post={post} />
        ))}
      </S.PostsWrapper>
      <S.BlogLink href="/blog">
        <a>ver todos os posts</a>
      </S.BlogLink>
    </>
  )
}
