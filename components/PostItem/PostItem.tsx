import * as S from './styled'

export const getTimeToRead = (time: number) => `${time} min de leitura`

const RenderCover = (cover: string, alt: string) => (
  <S.CoverWrapper>
    <S.Cover src={cover} alt={alt} />
  </S.CoverWrapper>
)

type Post = {
  title: string
  slug: string
  date: string
  tags?: string[]
  thumbnail: string
  timeToRead: number
}

type PostItemProps = {
  post: Post
}

export const PostItem = ({ post }: PostItemProps) => {
  const { slug } = post
  const { title, date, tags, thumbnail, timeToRead } = post

  return (
    <S.Post>
      {thumbnail && RenderCover(thumbnail, title)}
      <S.PostDetails>
        <S.PostNotes>
          <S.PostLabel>{date}</S.PostLabel>
          <S.PostLabel>{getTimeToRead(timeToRead)}</S.PostLabel>
        </S.PostNotes>
        <S.PostLink href={`/blog/${slug}`}>
          <a>
            <S.Title>{title}</S.Title>
          </a>
        </S.PostLink>
        <S.PostTags>
          {tags?.map((tag) => (
            <S.PostLabel key={tag}>#{tag}</S.PostLabel>
          ))}
        </S.PostTags>
      </S.PostDetails>
    </S.Post>
  )
}
