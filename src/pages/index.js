import React from 'react'

import Layout from 'components/Layout'
import BioResume from 'components/BioResume'
import PostsList from 'components/PostsList'
import SEO from 'components/seo'
import { HomePage } from "components/Pages/HomePage"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePage>
      <BioResume />
      <PostsList />
    </HomePage>
  </Layout>
)

export default IndexPage
