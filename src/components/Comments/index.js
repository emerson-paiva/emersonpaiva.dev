import React from 'react'
import ReactDisqusComments from 'react-disqus-comments'
import * as S from './styled'

const Comments = ({ title, slug }) => {
  const postURL = `https://emersonpaiva.dev/blog/${slug}`

  return (
    <S.CommentsWrapper>
      <ReactDisqusComments
        shortname="emersonpaiva"
        identifier={slug}
        title={title}
        url={postURL}
      />
    </S.CommentsWrapper>
  )
}

export default Comments
