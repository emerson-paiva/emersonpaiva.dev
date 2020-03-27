import React from 'react'

import Layout from 'components/Layout'
import BlogList from 'components/BlogList'
import SEO from 'components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Blog" />
    <BlogList />
  </Layout>
)

export default IndexPage
