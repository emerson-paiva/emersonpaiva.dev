import styled from 'styled-components'

export const Footer = styled.footer`
  text-align: center;
  padding: 3rem 0;
  width: 100%;
`

export const Span = styled.span`
  color: #414141;
  font-weight: 500;
  font-size: 1.6rem;
`

export const Link = styled.a`
  &::before {
    content: '•';
    display: inline-block;
    margin: 0px 0.4rem;
  }
`
