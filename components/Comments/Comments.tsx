// import ReactDisqusComments from 'react-disqus-comments'
import * as S from './styled'

export type CommentsProps = {
  title: string
  slug: string
}

// TODO change to github comments https://www.freecodecamp.org/news/github-discussions-as-chat-system/
export const Comments = ({ title, slug }: CommentsProps) => (
  <S.CommentsWrapper>
    {/* <ReactDisqusComments
      shortname="emersonpaiva"
      identifier={slug}
      title={title}
      url={`https://emersonpaiva.dev/blog/${slug}`}
    /> */}
  </S.CommentsWrapper>
)
