import React from 'react'

// Components
import Layout from "../layouts/Layout";
import Phrases from '../components/helpfulPhrases/Phrases';

const helpfullPhrases = () => {
  return (
    <Layout pageTitle="Helpful Phrases">
      <Phrases />
    </Layout>
  )
}

export default helpfullPhrases