import React from 'react'

import * as S from './styled'

const Footer = () => (
  <S.Footer>
    <S.Span>
      ©{new Date().getFullYear()} emersonpaiva.dev
      <S.Link
        href="https://github.com/emerpaiva/emersonpaiva.dev/blob/master/LICENSE"
        title="Termos de Uso"
        target="_blank"
      >
        Termos de Uso
      </S.Link>
    </S.Span>
  </S.Footer>
)

export default Footer
