import * as S from './styled'

export const getFormattedDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    dateStyle: 'medium',
  })

export const getTimeToRead = (time: number) => `${time} min of reading`

const RenderCover = (cover: string, alt: string) => (
  <S.CoverWrapper>
    <S.Cover src={cover} alt={alt} width={760} height={280} objectFit="cover" />
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
      {/* <Link href={`/blog/${slug}`}>
        <a> */}
      {thumbnail && RenderCover(thumbnail, title)}
      <S.PostDetails>
        <S.PostLink href={`/blog/${slug}`}>
          <a>
            <S.Title>{title}</S.Title>
          </a>
        </S.PostLink>
        <S.PostNotes>
          <S.PostLabel>{getFormattedDate(date)}</S.PostLabel>
          <S.PostLabel>{getTimeToRead(timeToRead)}</S.PostLabel>
        </S.PostNotes>
        <S.PostTags>
          {tags?.map((tag) => (
            <S.PostLabel key={tag}>#{tag}</S.PostLabel>
          ))}
        </S.PostTags>
      </S.PostDetails>
      {/* </a>
      </Link> */}
    </S.Post>
  )
}
