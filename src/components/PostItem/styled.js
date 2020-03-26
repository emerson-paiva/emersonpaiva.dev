import styled from 'styled-components'

export const Post = styled.article`
  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 0.3rem;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 4rem;
  }
`

export const CoverWrapper = styled.div`
  margin: 0 auto;
  max-height: 40rem;
  overflow: hidden;
  width: 100%;
`

export const Cover = styled.img`
  max-height: 40rem;
  height: auto;
  object-fit: cover;
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
  color: #414141;
  font-style: normal;
  font-size: 1.8rem;
  font-weight: 300;
`

export const Title = styled.h2`
  color: #000000;
  font-style: normal;
  font-weight: 500;
  font-size: 3.6rem;
  margin-bottom: 2rem;
  width: 100%;
`
