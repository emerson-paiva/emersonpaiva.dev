import React from 'react'

import * as S from './styled'

const getTimeToRead = time => `${time} min de leitura`

const RenderCover = (cover, alt) => (
  <S.CoverWrapper>
    <S.Cover fluid={cover} alt={alt} />
  </S.CoverWrapper>
)

const PostItem = ({ post }) => {
  const { slug } = post.fields
  const { title, date, tags, thumbnail } = post.frontmatter
  const timeToRead = getTimeToRead(post.timeToRead)
  const cover = thumbnail?.childImageSharp?.fluid

  return (
    <S.Post>
      {cover && RenderCover(cover, title)}
      <S.PostDetails>
        <S.PostNotes>
          <S.PostLabel>{date}</S.PostLabel>
          <S.PostLabel>{timeToRead}</S.PostLabel>
        </S.PostNotes>
        <S.PostLink to={`/blog/${slug}`}>
          <S.Title>{title}</S.Title>
        </S.PostLink>
        <S.PostTags>
          {tags?.map(tag => (
            <S.PostLabel key={tag}>#{tag}</S.PostLabel>
          ))}
        </S.PostTags>
      </S.PostDetails>
    </S.Post>
  )
}

export default PostItem
