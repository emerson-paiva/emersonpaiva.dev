import React from 'react'

import Layout from 'components/Layout'
import BlogList from 'components/BlogList'
import SEO from 'components/seo'

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <BlogList />
  </Layout>
)

export default BlogPage
