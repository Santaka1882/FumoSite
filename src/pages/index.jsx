import React from "react";

// Components
import Layout from "../layouts/Layout";
import HeroImage from "../components/HeroImage";
import InfoSection from "../components/InfoSection";
import FaqSection from "../components/FaqSection";

const MainPage = () => {
  return (
    <Layout pageTitle="Home">
      <HeroImage />
      <InfoSection />
      <FaqSection />
    </Layout>
  );
};

export default MainPage;
