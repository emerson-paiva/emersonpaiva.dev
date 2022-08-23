import * as S from './styled'

export const Footer = () => (
  <S.Footer>
    <S.Span>
      ©{new Date().getFullYear()} emersonpaiva.dev
      <S.Link
        href="https://github.com/emerpaiva/emersonpaiva.dev/blob/master/LICENSE"
        title="Termos de Uso"
        target="_blank"
        rel="noreferrer"
      >
        Termos de Uso
      </S.Link>
    </S.Span>
  </S.Footer>
)
