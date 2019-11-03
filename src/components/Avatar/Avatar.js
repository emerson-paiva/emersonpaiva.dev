import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styled';

const Avatar = () => {
  const { avatarImg } = useStaticQuery(graphql`
    query {
      avatarImg: file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <S.AvatarWrapper fluid={avatarImg.childImageSharp.fluid} />;
};

export default Avatar;
