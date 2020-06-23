import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const siteMetadataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        jobTitle
      }
    }
  }
`

const BioResume = () => {
  const data = useStaticQuery(siteMetadataQuery)

  const { title, description, jobTitle } = data.site.siteMetadata

  return (
    <S.BioWrapper>
      <S.Title>
        Olá,
        <br />
        Sou o <span>{title}</span>
      </S.Title>
      <S.JobTitle>{jobTitle}</S.JobTitle>
      <S.Description>{description}</S.Description>
    </S.BioWrapper>
  )
}

export default BioResume
