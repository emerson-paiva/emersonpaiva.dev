import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Tag } from 'styled-icons/boxicons-regular/Tag';
import media from 'styled-media-query';

export const PostItemLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;

  &:hover {
    color: var(--highlight);
  }
`;

export const PostItemWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid var(--borders);
  display: flex;
  padding: 2rem 3rem;
  width: 100%;

  ${media.lessThan('large')`
    padding: 1.5rem 2rem;
  `}
`;

export const PostItemTags = styled.div`
  text-align: start;
  padding: 0.5rem 0;
`;

export const PostItemTag = styled.span`
  color: 'var(--highlight)';
  font-size: 1rem;
  text-transform: lowercase;
`;

export const TagIcon = styled(Tag)`
  width: 1.1rem;
  margin-right: 0.3rem;
`;

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostItemDate = styled.time`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

export const PostItemTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

  ${media.lessThan('medium')`
    font-size: 1.4rem;
  `}
`;

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 1rem;
`;
