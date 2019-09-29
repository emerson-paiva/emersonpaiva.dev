import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Avatar = () => {
  const { avatarImg } = useStaticQuery(graphql`
    query {
      avatarImg: file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `);

  return <Img fixed={avatarImg.childImageSharp.fixed} />;
};

export default Avatar;
