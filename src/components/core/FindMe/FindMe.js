import React from 'react'
import { Twitter, Github } from '@styled-icons/icomoon'
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin'

import * as S from './FindMeStyle'

const SocialMediaLink = ({ url, Icon }) => (
  <S.Link href={url} rel="noopener noreferrer" target="_blank">
    <Icon />
  </S.Link>
)

const FindMe = ({ socialMedias }) => (
  <S.FindMeWrapper>
    <SocialMediaLink
      url={`https://github.com/${socialMedias.github}`}
      Icon={Github}
    />
    <SocialMediaLink
      url={`https://www.linkedin.com/in/${socialMedias.linkedin}`}
      Icon={Linkedin}
    />
    <SocialMediaLink
      url={`https://twitter.com/${socialMedias.twitter}`}
      Icon={Twitter}
    />
  </S.FindMeWrapper>
)

export default FindMe
