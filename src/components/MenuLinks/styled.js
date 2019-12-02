import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const MenuLinksWrapper = styled.nav`
  width: 100%;

  ${media.lessThan('large')`
    display: none;
  `}
`;

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
  text-align: center;
`;

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: var(--highlight);
    position: relative;

    &::before {
      content: '';
      display: block;
      background-color: var(--highlight);
      position: absolute;
      height: 100%;
      width: 3px;
    }
  }
`;

export const MenuLinksLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`;
