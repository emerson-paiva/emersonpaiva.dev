import { Twitter, Github } from '@styled-icons/icomoon'
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin'
import type { StyledIcon } from '@styled-icons/styled-icon'

import * as S from './styled'

export type SocialMedia = {
  url: string
  title: string
  Icon: StyledIcon
}

export const SocialMediaLink = ({ url, title, Icon }: SocialMedia) => (
  <S.Link href={url} rel="noopener noreferrer" target="_blank" title={title}>
    <Icon />
  </S.Link>
)

export type FindMeProps = {
  github: string
  linkedin: string
  twitter: string
}

export const FindMe = ({ github, linkedin, twitter }: FindMeProps) => (
  <S.FindMeWrapper>
    <SocialMediaLink
      url={`https://github.com/${github}`}
      Icon={Github}
      title="Github"
    />
    <SocialMediaLink
      url={`https://www.linkedin.com/in/${linkedin}`}
      Icon={Linkedin}
      title="LinkedIn"
    />
    {/* <SocialMediaLink
      url={`https://twitter.com/${twitter}`}
      Icon={Twitter}
      title="Twitter"
    /> */}
  </S.FindMeWrapper>
)
