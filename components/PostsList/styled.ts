import Link from 'next/link'
import styled from 'styled-components'

export const PostsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
`

export const BlogLink = styled(Link)`
  color: var(--color-primary);
  display: table;
  margin: 0 auto;
  font-size: 1.8rem;
  position: relative;

  &::before {
    background-color: var(--color-primary);
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.3s ease-in-out;
    height: 2px;
    width: 0;
  }

  &:hover {
    &::before {
      width: 90%;
    }
  }
`
