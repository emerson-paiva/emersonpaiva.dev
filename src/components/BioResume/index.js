import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const BioResume = () => {
  const data = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
          jobTitle
        }
      }
    }
  `)

  const { title, description, jobTitle } = data.site.siteMetadata

  return (
    <S.Container>
      <S.BioWrapper>
        <S.Title>
          Hello
          <br />
          I'm <span>{title}</span>
        </S.Title>
        <S.JobTitle>{jobTitle}</S.JobTitle>
        <S.Description>{description}</S.Description>
      </S.BioWrapper>
    </S.Container>
  )
}

export default BioResume
