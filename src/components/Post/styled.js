import styled from 'styled-components'
import Img from 'gatsby-image'

export const Cover = styled(Img)`
  height: 100%;
  margin-top: 7.2rem;
  max-height: 50rem;
  width: 100%;

  &::after {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.65) 50%, rgba(121, 75, 196, 0.65) 90%);
    opacity: .6;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

export const PostView = styled.div`
  background: var(--color-background);
  border-radius: 4rem;
  font-weight: 400;
  height: 100%;
  max-width: 100rem;
  width: 100%;
  padding: 5rem 7rem;
  position: absolute;
  top: -20rem;
`

export const PostTitle = styled.h1`
  color: var(--color-white-100);
  font-size: var(--title);
  position: absolute;
  top: -42rem;
  line-height: 1.4;
  text-align: center;
`

export const PostExcerpt = styled.div`
  color: var(--color-white-200);
  font-size: 2rem;
  height: 15rem;
  line-height: 1.4;

  display: flex;
  align-items: center;
  padding-bottom: 5rem;
`

export const PostContent = styled.article`
  color: var(--color-white-100);
  font-size: 2rem;
  line-height: 1.4;

  p {
    margin-bottom: 2.4rem;
  }
`