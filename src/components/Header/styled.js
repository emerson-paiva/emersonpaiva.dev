import styled from 'styled-components'
import { Link } from 'gatsby'
import media from 'styled-media-query'
import { LightBulb } from '@styled-icons/heroicons-solid/LightBulb'

export const Header = styled.header`
  background-color: var(--color-background);
  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  height: 7.2rem;
  padding: 1.2rem 4rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;

  ${media.lessThan('medium')`
    padding: 1.2rem 2rem;
  `}
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 90rem;
  margin: 0 auto;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Name = styled.h1`
  color: var(--color-white-100);
  font-size: 2.2rem;
  font-weight: normal;
  transition: all 0.2s linear;

  &:hover {
    color: var(--color-primary);
  }
`

export const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 2rem;
  height: 4.8rem;
  width: 4.8rem;
`

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  padding-right: 1.75rem;

  &:not(:last-child) {
    margin-right: 1.25rem;
  }
`

export const NavItem = styled(Link)`
  color: var(--color-white-100);
  font-size: 1.7rem;
  font-weight: 600;
  text-decoration: none;
  position: relative;

  &:not(:last-child) {
    color: var(--color-primary);

    &::after {
      content: '•';
      color: var(--color-white-100);
      display: inline-block;
      margin: 0px 1rem;
    }
  }
`

export const ButtonChangeTheme = styled.button`
  cursor: pointer;
  display: block;
  outline: none;
  height: 3rem;
  width: 3rem;
`

export const Light = styled(LightBulb)`
  fill: var(--color-lamp);
  transition: fill 0.1s linear;
  width: 100%;
`
