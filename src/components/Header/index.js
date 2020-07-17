import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Avatar from 'components/Avatar'
import switchOn from '../../assets/audio/switch-on.mp3'
import switchOff from '../../assets/audio/switch-off.mp3'
import * as S from './styled'

const UserAvatar = () => (
  <S.Wrapper>
    <Avatar />
    <Link to="/">
      <S.Name>emerson</S.Name>
    </Link>
  </S.Wrapper>
)

const Header = () => {
  const [theme, setTheme] = useState()
  const [lightOn, setLightOn] = useState()
  const [lightOff, setLightOff] = useState()

  const toggleTheme = () => {
    if (theme === 'dark') {
      lightOn.play()
      setTheme('light')
    } else {
      lightOff.play()
      setTheme('dark')
    }
  }

  useEffect(() => {
    setTheme(window.__theme)
    setLightOn(new Audio(switchOn))
    setLightOff(new Audio(switchOff))
  }, [])

  useEffect(() => {
    window.__setPreferredTheme(theme)
  }, [theme])

  return (
    <S.Header>
      <S.Container>
        <UserAvatar />
        <S.Wrapper>
          <S.Navbar>
            {/* TODO add who I'm page */}
            <S.NavItem to="/">hi</S.NavItem>
            <S.NavItem to="/blog">blog</S.NavItem>
          </S.Navbar>
          <S.ButtonChangeTheme onClick={toggleTheme}>
            <S.Light />
          </S.ButtonChangeTheme>
        </S.Wrapper>
      </S.Container>
    </S.Header>
  )
}

export default Header
