import React from 'react'

import * as S from './styled'

const BioResume = ({ title, jobTitle, description }) => (
  <S.Container>
    <S.BioWrapper>
      <S.Title>
        Hello
        <br />
        I'm <span>Emerson Paiva</span>
      </S.Title>
      <S.JobTitle>
        Desenvolvedor Front End — Pseudo Cinéfilo — Indie Rock
      </S.JobTitle>
      <S.Description>
        Aqui eu compartilho um pouco das minhas ideias (e frustações) com um
        foco principal naquilo que eu amo: desenvolver coisas bonitinhas e
        funcionais!
      </S.Description>
    </S.BioWrapper>
  </S.Container>
)

export default BioResume
