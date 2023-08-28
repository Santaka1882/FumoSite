import React from 'react'

// Components
import Layout from "../layouts/Layout";
import Proxies from '../components/proxiesAndForwarders/Proxies';

const proxiesAndFowarders = () => {
  return (
    <Layout pageTitle="Proxies And Fowarders">
      <Proxies/>
    </Layout>
  )
}

export default proxiesAndFowarders