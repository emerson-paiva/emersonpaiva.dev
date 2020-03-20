import styled from 'styled-components'
import { Link } from 'gatsby'

export const Header = styled.header`
  background-color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 1.2rem 4rem;
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
  color: #414141;
  font-size: 2.2rem;
  font-weight: normal;
`

export const Avatar = styled.img`
  border-radius: 50%;
  height: 48px;
  margin-right: 2rem;
  width: 48px;
`

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  padding-right: 1.75rem;
  margin-right: 1.25rem;
`

export const NavItem = styled(Link)`
  color: #414141;
  font-size: 2.6rem;
  font-weight: 500;
  text-decoration: none;
  position: relative;

  &:not(:last-child) {
    color: #932096;

    &::after {
      content: '•';
      color: #414141;
      display: inline-block;
      margin: 0px 1rem;
    }
  }
`

export const BtnModeChange = styled.button`
  cursor: pointer;
  display: block;
  outline: none;
  height: 3rem;
  width: 3rem;

  & > svg {
    fill: #d4d400;
    width: 100%;
  }
`
