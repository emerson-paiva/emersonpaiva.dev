import * as S from './styled'

export const BioResume = () => {
  // const data = useStaticQuery(siteMetadataQuery)

  // const { title, description, jobTitle } = data.site.siteMetadata

  // TODO add avatar here
  return (
    <S.BioWrapper>
      <S.Title>
        Olá,
        <br />
        Sou o <span>Emerson Paiva</span>
      </S.Title>
      <S.JobTitle>Desenvolvedor Front End & Cinéfilo</S.JobTitle>
      <S.Description>
        Seja muito bem vindo(a) ao meu blog! Aqui eu vou compartilhar um pouco
        do conhecimento adquirido na minha jornada como desenvolvedor Front End!
      </S.Description>
    </S.BioWrapper>
  )
}
