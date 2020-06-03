import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export const Post = styled.article`
  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 0.3rem;
  color: var(--color-white-100);
  overflow: hidden;
  position: relative;
  transition: all 0.2s linear;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 4rem;
  }

  &:hover {
    box-shadow: 0rem 0.6rem 0.6rem rgba(0, 0, 0, 0.25);
    color: var(--color-primary);
  }
`

export const CoverWrapper = styled.div`
  overflow: hidden;
  width: 100%;
`

export const Cover = styled(Img)`
  width: 100%;
`

export const PostDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem 2rem;
`

export const PostNotes = styled.div`
  align-self: flex-end;
  margin-bottom: 2rem;

  & > span {
    &:not(:first-child) {
      &::before {
        content: '•';
        display: inline-block;
        margin: 0px 1rem;
      }
    }
  }
`

export const PostTags = styled.div`
  & > span {
    &:not(:last-child) {
      margin-right: 2rem;
    }
  }
`

export const PostLabel = styled.span`
  color: var(--color-white-100);
  font-style: normal;
  font-size: 1.6rem;
  font-weight: 300;
`

export const Title = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 3.6rem;
  margin-bottom: 2rem;
  width: 100%;
`

export const PostLink = styled(Link)`
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
`
