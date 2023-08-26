import React from "react";

// Components
import Layout from "../layouts/Layout";
import Characters from "../components/fumoList/Characters";

const fumos = () => {
  return (
    <Layout pageTitle="Fumos">
      <Characters />
    </Layout>
  );
};

export default fumos;
