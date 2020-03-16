import React from 'react'
import { LightBulb } from '@styled-icons/heroicons-solid/LightBulb'
import { Link } from 'gatsby'

import * as S from './HeaderStyle'

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
    <Avatar />
    <S.Wrapper>
      <S.Navbar>
        <S.NavItem to="/about">hi</S.NavItem>
        <S.NavItem to="/blog">blog</S.NavItem>
      </S.Navbar>
      <S.BtnModeChange>
        <LightBulb />
      </S.BtnModeChange>
    </S.Wrapper>
  </S.Header>
)

export default Header
