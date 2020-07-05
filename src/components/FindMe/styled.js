import styled from 'styled-components'
import media from 'styled-media-query'

export const FindMeWrapper = styled.div`
  background-color: var(--color-background);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  border-radius: 0px 2px 2px 0px;
  position: fixed;
  left: 0;
  top: 49.7%;
  transform: translateY(-50%);
  padding: 2rem 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  z-index: 100;

  ${media.lessThan('medium')`
    flex-direction: row;
    bottom: 0;
    left: 0;
    right: 0;
    top: unset;
    transform: unset;
    padding: 1rem 1.2rem;
  `}
`

export const Link = styled.a`
  color: var(--color-white-100);
  cursor: pointer;
  display: block;
  height: 3rem;
  width: 3rem;
  transition: all 0.2s linear;

  &:not(:last-child) {
    margin-bottom: 2rem;

    ${media.lessThan('medium')`
      margin-bottom: 0;
    `}
  }

  &:hover {
    color: var(--color-primary);
  }
`
