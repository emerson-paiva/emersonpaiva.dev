import React from 'react'
import PropTypes from 'prop-types'

import * as S from './HeaderStyle'

import avatar from 'images/avatar.jpg'

const Avatar = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <S.Avatar src={avatar} />
    <S.Name>emerson paiva</S.Name>
  </div>
)

const Header = props => {
  return (
    <S.Header>
      <Avatar />
      <div>navegação</div>
    </S.Header>
  )
}

Header.propTypes = {}

export default Header
