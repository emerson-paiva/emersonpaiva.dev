import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { LightBulb } from '@styled-icons/heroicons-solid/LightBulb'
import Link from 'next/link'

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
  display: flex;
  align-items: center;

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
  width: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Name = styled.h1`
  color: var(--color-text);
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

  &:not(:last-child) {
    margin-right: 1.25rem;
  }
`

const navItemModifier = {
  active: () => css`
    color: var(--color-primary);
  `,
}

export const NavItem = styled.a<{ active?: boolean }>`
  color: var(--color-text);
  font-size: 1.7rem;
  font-weight: 600;
  text-decoration: none;
  position: relative;

  &:not(:last-child) {
    &::after {
      content: '•';
      color: var(--color-text);
      display: inline-block;
      margin: 0px 1rem;
    }
  }

  ${({ active = false }) => active && navItemModifier.active()}
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
