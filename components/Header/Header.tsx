import { useEffect, useState } from 'react'
// import switchOn from '../../assets/audio/switch-on.mp3'
// import switchOff from '../../assets/audio/switch-off.mp3'
import Link from 'next/link'
import * as S from './styled'

const UserAvatar = () => (
  <S.Wrapper>
    {/* <Avatar src="/static/avatar.jpg" /> */}
    <Link href="/">
      <a>
        <S.Name>Emerson Paiva</S.Name>
      </a>
    </Link>
  </S.Wrapper>
)

export const Header = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>()
  const [onSwitchOn, setOnSwitchOn] = useState()
  const [onSwitchOff, setOnSwitchOff] = useState()

  const toggleTheme = () => {
    if (theme === 'dark') {
      // onSwitchOn.play()
      setTheme('light')
    } else {
      // onSwitchOff.play()
      setTheme('dark')
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    // setTheme(window.__theme)
    // setOnSwitchOn(new Audio(switchOn))
    // setOnSwitchOff(new Audio(switchOff))
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    // window.__setPreferredTheme(theme)
  }, [theme])

  return (
    <S.Header>
      <S.Container>
        <UserAvatar />
        <S.Wrapper>
          <S.Navbar>
            {/* TODO add who I'm page */}
            <Link href={'/'} passHref>
              <S.NavItem>hi</S.NavItem>
            </Link>
            <Link href="/blog" passHref>
              <S.NavItem>blog</S.NavItem>
            </Link>
          </S.Navbar>
          {/* <S.ButtonChangeTheme onClick={toggleTheme}>
            <S.Light />
          </S.ButtonChangeTheme> */}
        </S.Wrapper>
      </S.Container>
    </S.Header>
  )
}
