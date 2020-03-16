import styled from 'styled-components'
import { Link } from 'gatsby'

export const Header = styled.header`
  background-color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 1.2rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    margin-right: 2.5rem;

    &::after {
      content: '';
      background-color: #646f8f;
      border-radius: 50%;
      display: block;
      height: 0.5rem;
      width: 0.5rem;
      position: absolute;
      right: -1.25rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`

export const BtnModeChange = styled.button`
  cursor: pointer;
  display: block;
  height: 3rem;
  width: 3rem;

  & > svg {
    fill: #cad02c;
    width: 100%;
  }
`
