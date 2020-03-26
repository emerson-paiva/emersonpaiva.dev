import React from 'react'

import Layout from 'components/Layout'
import BioResume from 'components/BioResume'
import PostsList from 'components/PostsList'
import SEO from 'components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BioResume />
    <PostsList />
  </Layout>
)

export default IndexPage
