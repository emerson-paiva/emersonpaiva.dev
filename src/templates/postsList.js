import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem/PostItem';
import Pagination from '../components/Pagination/Pagination';

const PostsList = props => {
  const postList = props.data.allMarkdownRemark.edges;
  const { currentPage, numPages } = props.pageContext;
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(
        ({
          node: {
            frontmatter: { tags, description, date, background, title },
            timeToRead,
            fields: { slug },
            id,
          },
        }) => (
          <PostItem
            slug={slug}
            background={background}
            tags={tags}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
            key={id}
          />
        )
      )}

      <Pagination
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  );
};

export const query = graphql`
  query PostsList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: ASC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            tags
            background
          }
          id
          fields {
            slug
          }
          timeToRead
        }
      }
    }
  }
`;

export default PostsList;
