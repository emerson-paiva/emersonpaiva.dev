import * as S from './styled'

export const Avatar = ({ src }: { src: string }) => (
  <S.AvatarWrapper src={src} width={48} height={48} quality={100} />
)
