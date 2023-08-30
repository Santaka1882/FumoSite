import React from 'react'

// Components
import Layout from "../layouts/Layout";
import Resellers from '../components/resellers/Resellers';

const resellers = () => {
  return (
    <Layout pageTitle="Resellers">
      <Resellers />
    </Layout>
  )
}

export default resellers