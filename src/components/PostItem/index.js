import React from 'react'

const getTimeToRead = time => `${time} min de leitura`

const RenderCover = (base64, alt) => (
  <div>
    <img src={base64} alt={alt} />
  </div>
)

const PostItem = ({ post }) => {
  const { slug } = post.fields
  const { title, date, tags, thumbnail } = post.frontmatter
  const timeToRead = getTimeToRead(post.timeToRead)
  const cover = thumbnail?.childImageSharp?.fluid?.base64

  return (
    <div>
      {cover && RenderCover(cover, title)}
      <div>
        <span>{date}</span>
        <span>{timeToRead}</span>
      </div>
      <h2>{title}</h2>
    </div>
  )
}

export default PostItem
