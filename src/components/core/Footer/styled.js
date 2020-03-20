import styled from 'styled-components'

export const Footer = styled.footer`
  text-align: center;
  width: 100%;
`

export const Span = styled.span`
  color: #757575;
  font-size: 1.4rem;
`

export const Link = styled.a`
  &::before {
    content: '•';
    display: inline-block;
    margin: 0px 0.4rem;
  }
`
