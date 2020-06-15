import React from 'react'
import { LightBulb } from '@styled-icons/heroicons-solid/LightBulb'
import { Link } from 'gatsby'

import * as S from './styled'

import avatar from 'images/avatar.jpg'

const Avatar = () => (
  <S.Wrapper>
    <S.Avatar src={avatar} alt="Avatar" />
    <Link to="/">
      <S.Name>emerson</S.Name>
    </Link>
  </S.Wrapper>
)

const Header = () => (
  <S.Header>
    <S.Container>
      <Avatar />
      <S.Wrapper>
        <S.Navbar>
          <S.NavItem to="/about">hi</S.NavItem>
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
