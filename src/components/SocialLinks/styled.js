import styled from 'styled-components';
import media from 'styled-media-query';

export const SocialLinksWrapper = styled.nav`
  background-color: rgba(222, 222, 222, 0.5);
  padding: 0.3rem;
  border-radius: 0 10px 10px 0;
  margin-top: auto;
  /* position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10; */

  ${media.lessThan('large')`
    display: none;
  `}
`;

export const SocialLinksList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  min-width: 14rem;
`;

export const SocialLinksItem = styled.li``;

export const SocialLinksLink = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`;

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`;
