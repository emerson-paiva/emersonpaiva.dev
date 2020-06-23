import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'

export const Cover = styled(Img)`
  height: 100%;
  margin-top: 7.2rem;
  max-height: 50rem;
  width: 100%;

  &::after {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.65) 50%,
      rgba(121, 75, 196, 0.65) 90%
    );
    opacity: 0.6;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  ${media.lessThan('medium')`
    max-height: 30rem;
  `}
`

export const CoverCredit = styled.div`
  color: var(--color-white-200);
  font-size: 1.4rem;
  position: absolute;
  top: 54rem;
  right: 1rem;
  opacity: 0.7;
  transition: all 0.3s linear;

  &:hover {
    color: var(--color-primary);
    opacity: 1;
  }

  ${media.lessThan('large')`
    top: 8rem;
  `}
`

export const PostView = styled.div`
  background: var(--color-background);
  border-radius: 4rem;
  font-weight: 400;
  height: 100%;
  max-width: 86rem;
  margin: 0 auto;
  padding: 5rem 7rem;
  position: relative;
  top: -20rem;
  width: 100%;

  ${media.lessThan('medium')`
    padding: 0 5rem 3rem;
    top: 0;
  `}
`

export const PostTitle = styled.h1`
  color: var(--color-white-100);
  font-size: var(--title);
  line-height: 1.4;

  ${media.lessThan('medium')`
    font-size: var(--mobile-title);
  `}
`

export const PostTitleWrapper = styled.div`
  height: 30rem;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 86rem;
  margin-top: 7.2rem;
  width: 100%;
  padding-bottom: 1rem;

  ${media.lessThan('medium')`
    position: relative;
    max-width: 86rem;
    top: unset;
    left: unset;
    transform: unset;
    margin-top: unset;
    height: auto;
    padding: 3rem 5rem;
  `}
`

export const PostTagsAndTime = styled.div`
  align-self: flex-end;
  color: var(--color-white-100);
  font-size: 1.8rem;
`

export const Tags = styled.div`
  display: inline-block;
`

export const Tag = styled.span`
  background-color: var(--color-background);
  border-radius: 0.8rem;
  color: var(--color-text);
  padding: 0.3rem 0.5rem;
`

export const PostExcerpt = styled.div`
  color: var(--color-white-200);
  font-size: 2rem;
  min-height: 15rem;
  line-height: 1.7;

  display: flex;
  align-items: center;
  padding-bottom: 5rem;

  ${media.lessThan('medium')`
    padding-bottom: 2rem;
  `}
`

export const PostContent = styled.article`
  margin: auto;

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: var(--color-white-100);
    font-size: 2rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0;
  }

  p {
    margin: 0 auto 2rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 3.2rem auto 1rem;

    &:first-child {
      margin-top: 0;
    }
  }

  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }

  li {
    padding: 0.625rem 0;

    & > ul {
      margin-bottom: 0;
    }
  }

  p,
  li {
    code {
      word-wrap: break-word;
    }
  }

  img {
    display: block;
    max-width: 100%;
    margin: 5rem auto 1rem;

    & + em {
      color: var(--color-white-200);
      display: block;
      font-style: normal;
      font-size: 1.2rem;
      text-align: center;
      margin: 0 auto 4rem;
    }
  }

  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
  }

  blockquote {
    color: var(--color-white-100);
    border-left: 0.3rem solid var(--highlight);
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }

  hr {
    border: 1px solid var(--borders);
    margin: 3rem auto;
  }

  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 700;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }

  h1 {
    font-size: 3.2rem;
  }

  h2 {
    font-size: 2.6rem;
  }

  h3 {
    font-size: 2rem;
  }

  h4 {
    font-size: 1.6rem;
  }

  h5 {
    font-size: 1.4rem;
  }

  strong {
    font-weight: 700;
  }

  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }

  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;

    &.lazyload {
      opacity: 0;
    }

    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }

  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;
  }

  .instagram-media {
    margin: 1rem auto !important;
  }

  a {
    border-bottom: 1px dashed var(--color-primary);
    color: var(--color-primary);
    text-decoration: none;
    transition: opacity 0.5s;

    svg {
      color: var(--color-white-100);
    }

    &:hover {
      opacity: 0.8;
    }
  }

  ${media.lessThan('large')`
    h1 {
      font-size: 2.6rem;
    }

    h2 {
      font-size: 1.8rem;
    }

    h3 {
      font-size: 1.4rem;
    }

    h4 {
      font-size: 1.2rem;
    }

    h5 {
      font-size: 1rem;
    }
  `}
`
