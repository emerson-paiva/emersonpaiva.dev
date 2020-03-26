import React from 'react'

import * as S from './styled'

const getTimeToRead = time => `${time} min de leitura`

const RenderCover = (imgUrl, alt) => (
  <S.CoverWrapper>
    <S.Cover src={imgUrl} alt={alt} />
  </S.CoverWrapper>
)

const PostItem = ({ post }) => {
  const { slug } = post.fields
  const { title, date, tags, thumbnail } = post.frontmatter
  const timeToRead = getTimeToRead(post.timeToRead)
  const cover = thumbnail?.childImageSharp?.fluid?.src

  return (
    <S.Post>
      {cover && RenderCover(cover, title)}
      <S.PostDetails>
        <S.PostNotes>
          <S.PostLabel>{date}</S.PostLabel>
          <S.PostLabel>{timeToRead}</S.PostLabel>
        </S.PostNotes>
        <S.Title>{title}</S.Title>
        <S.PostTags>
          <S.PostLabel>#javascript</S.PostLabel>
          <S.PostLabel>#opensource</S.PostLabel>
        </S.PostTags>
      </S.PostDetails>
    </S.Post>
  )
}

export default PostItem
