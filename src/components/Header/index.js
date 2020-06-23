import React from 'react'
import { LightBulb } from '@styled-icons/heroicons-solid/LightBulb'
import { Link } from 'gatsby'
import Avatar from 'components/Avatar'
import * as S from './styled'

const UserAvatar = () => (
  <S.Wrapper>
    <Avatar />
    <Link to="/">
      <S.Name>emerson</S.Name>
    </Link>
  </S.Wrapper>
)

const Header = () => (
  <S.Header>
    <S.Container>
      <UserAvatar />
      <S.Wrapper>
        <S.Navbar>
          {/* TODO add who I'm page */}
          <S.NavItem to="/">hi</S.NavItem>
          <S.NavItem to="/blog">blog</S.NavItem>
        </S.Navbar>
        {/* TODO add toggle dark mode */}
        {/* <S.BtnModeChange>
          <LightBulb />
        </S.BtnModeChange> */}
      </S.Wrapper>
    </S.Container>
  </S.Header>
)

export default Header
