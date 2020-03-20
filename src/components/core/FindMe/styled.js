import styled from 'styled-components'

export const FindMeWrapper = styled.div`
  background-color: #fff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  border-radius: 0px 2px 2px 0px;
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 2rem 1.2rem;
  display: flex;
  flex-direction: column;
`

export const Link = styled.a`
  color: #414141;
  cursor: pointer;
  display: block;
  height: 3rem;
  width: 3rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`
