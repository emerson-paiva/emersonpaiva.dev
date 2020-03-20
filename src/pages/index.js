import React from 'react'

import Layout from 'components/Layout'
import BioResume from 'components/BioResume'
import SEO from 'components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BioResume />
  </Layout>
)

export default IndexPage
