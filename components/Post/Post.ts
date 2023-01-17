import styled from 'styled-components'
import media from 'styled-media-query'
import Image from 'next/image'

export const Cover = styled(Image)`
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
    opacity: 0.8;
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
  color: var(--color-text-2);
  font-size: 1.4rem;
  position: absolute;
  top: 7.2rem;
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
  font-weight: 400;
  height: 100%;
  max-width: 86rem;
  margin: 0 auto;
  padding: 3rem 7rem 5rem;
  position: relative;
  width: 100%;

  ${media.lessThan('medium')`
    padding: 0 5rem 3rem;
    top: 0;
  `}
`

export const PostTitle = styled.h1`
  color: var(--color-text);
  font-size: var(--title);
  line-height: 1.4;
  text-shadow: 0.1rem 0.2rem 3rem;
  text-align: center;
  width: 100%;

  ${media.lessThan('medium')`
    font-size: var(--mobile-title);
  `}
`

export const PostTitleWrapper = styled.div`
  height: 25rem;
  top: 7.2rem;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 86rem;
  width: 100%;
  padding-bottom: 1rem;
  margin-top: 10rem;

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
  color: var(--color-text);
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

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`

export const PostExcerpt = styled.div`
  color: var(--color-text-2);
  font-size: 2rem;
  line-height: 1.7;
  margin-bottom: 2rem;

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
    color: var(--color-text);
    font-size: 2rem;
    font-weight: 400;
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

  .gatsby-resp-image-wrapper,
  img {
    display: block;
    max-width: 100%;
    margin: 5rem auto 1rem;

    & + em {
      color: var(--color-text-2);
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
    color: var(--color-text);
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

  .gatsby-resp-image-image,
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
      color: var(--color-text);
    }

    &:hover {
      opacity: 0.8;
    }
  }

  /*
 * Synthwave '84 Theme originally by Robb Owen [@Robb0wen] for Visual Studio Code
 * Demo: https://marc.dev/demo/prism-synthwave84
 * Ported for PrismJS by Marc Backes [@themarcba]
 */

  code[class*='language-'],
  pre[class*='language-'] {
    color: #f92aad;
    text-shadow: 0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3;
    background: none;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 1.6rem;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background-color: #343434 !important;
    background-image: linear-gradient(to bottom, #2a2139 75%, #34294f);
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #8e8e8e;
  }

  .token.punctuation {
    color: #ccc;
  }

  .token.tag,
  .token.attr-name,
  .token.namespace,
  .token.number,
  .token.unit,
  .token.hexcode,
  .token.deleted {
    color: #e2777a;
  }

  .token.property,
  .token.selector {
    color: #72f1b8;
    text-shadow: 0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475;
  }

  .token.function-name {
    color: #6196cc;
  }

  .token.boolean,
  .token.selector .token.id,
  .token.function {
    color: #fdfdfd;
    text-shadow: 0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975,
      0 0 8px #03edf975;
  }

  .token.class-name {
    color: #fff5f6;
    text-shadow: 0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75,
      0 0 25px #fc1f2c75;
  }

  .token.constant,
  .token.symbol {
    color: #f92aad;
    text-shadow: 0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3;
  }

  .token.important,
  .token.atrule,
  .token.keyword,
  .token.selector .token.class,
  .token.builtin {
    color: #f4eee4;
    text-shadow: 0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575;
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: #f87c32;
  }

  .token.operator,
  .token.entity,
  .token.url {
    color: #67cdcc;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.inserted {
    color: green;
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
