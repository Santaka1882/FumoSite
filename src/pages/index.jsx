import React from "react";

// Components
import Layout from "../layouts/Layout";
import HeroImage from "../components/HeroImage";
import InfoSection from "../components/InfoSection";
import FaqSection from "../components/FaqSection";

// css
import { waveBackground } from '../styles/index.module.css'

const MainPage = () => {
  return (
    <Layout pageTitle="Home">
      <HeroImage />
      <div className={`w-full aspect-w-16 aspect-h-6 bg-center bg-cover bg-no-repeat ${waveBackground}`}></div>
      <InfoSection />
      <FaqSection />
    </Layout>
  );
};

export default MainPage;
