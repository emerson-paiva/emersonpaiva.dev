import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import getThemeColor from '../../utils/getThemeColor';

import Avatar from '../Avatar/Avatar';

import * as S from './styled';

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
          position
        }
      }
    }
  `);

  return (
    <S.ProfileWrapper>
      <S.ProfileLink
        to="/"
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.5}
      >
        <Avatar />
        <S.ProfileAuthor>
          {title}
          {/* <S.ProfilePosition>{position}</S.ProfilePosition> */}
          <S.ProfileDescription>{description}</S.ProfileDescription>
        </S.ProfileAuthor>
      </S.ProfileLink>
    </S.ProfileWrapper>
  );
};

export default Profile;
