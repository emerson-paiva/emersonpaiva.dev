import React from 'react'
import { Twitter, Github } from '@styled-icons/icomoon'
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin'

import * as S from './FindMeStyle'

const SocialMediaLink = ({ url, title, Icon }) => (
  <S.Link href={url} rel="noopener noreferrer" target="_blank" title={title}>
    <Icon />
  </S.Link>
)

const FindMe = ({ socialMedias }) => (
  <S.FindMeWrapper>
    <SocialMediaLink
      url={`https://github.com/${socialMedias.github}`}
      Icon={Github}
      title="Github"
    />
    <SocialMediaLink
      url={`https://www.linkedin.com/in/${socialMedias.linkedin}`}
      Icon={Linkedin}
      title="LinkedIn"
    />
    <SocialMediaLink
      url={`https://twitter.com/${socialMedias.twitter}`}
      Icon={Twitter}
      title="Twitter"
    />
  </S.FindMeWrapper>
)

export default FindMe
