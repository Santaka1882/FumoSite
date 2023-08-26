import React from "react";

// Components
import Layout from "../layouts/Layout";
import HeroImage from "../components/mainPage/HeroImage";
import InfoSection from "../components/mainPage/InfoSection";
import FaqSection from "../components/mainPage/FaqSection";

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
