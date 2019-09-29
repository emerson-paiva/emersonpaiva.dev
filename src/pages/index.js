import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem/PostItem';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about/"
      background="gray"
      category="JS"
      date="23 de junho de 2019"
      timeToRead="9"
      title="E acabou o melhor ano da minha vida (até agora)"
      description="Um pouco sobre as minhas conquistas em 2018 e as metas para 2019"
    />
  </Layout>
);

export default IndexPage;
