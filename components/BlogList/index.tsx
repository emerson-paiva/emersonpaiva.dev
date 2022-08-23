// import { useStaticQuery, graphql } from 'gatsby'
import PostItem from 'components/PostItem'
import * as S from './styled'

export const BlogList = ({ posts }) => {
  // const { firstPost, otherPosts } = useStaticQuery(postsQuery)
  // const posts = [...firstPost.nodes, ...otherPosts.nodes]

  return (
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
}
