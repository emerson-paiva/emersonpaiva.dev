const postsQuery = ` {
  posts: allMarkdownRemark(
    sort: { fields: frontmatter___date, order: ASC }
  ) {
    edges {
      node {
        frontmatter {
          background
          category
          date_timestamp: date
          date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
          description
          title
        }
        fields {
          slug
        },
        objectID: id,
        excerpt(pruneLength: 5000)
      }
    }
  }
}`;

const flattern = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest,
  }));

const queries = [
  {
    query: postsQuery,
    transformer: ({ data }) => flattern(data.posts.edges),
    indexName: 'Posts',
    settings: {
      attributesToSnippet: ['excerpt:20'],
    },
  },
];

module.exports = queries;
