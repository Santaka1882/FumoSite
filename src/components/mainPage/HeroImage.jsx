import React, { useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";

// Animations
import Aos from "aos";
import "aos/dist/aos.css";

const HeroImage = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className="flex flex-col items-center w-full py-20 my-4 bg-red-500" data-aos='fade-up'>
      <div className="flex flex-col items-center w-4/5 max-w-7xl mx-auto bg-red-500 md:flex-row-reverse justify-around lg:flex-row">
        <StaticImage
          src="../../images/HeroImage.jpg"
          alt="Reimu fumo"
          className="w-60 rounded-full md:rounded-lg 2xl:w-80"
        />
        <div className="max-w-sm text-center md:text-left 2xl:max-w-lg">
          <h2 className="pt-4 text-yellow-200 font-semibold text-2xl md:py-4 md:text-5xl 2xl:text-7xl">
            Fumos
          </h2>
          <p className="max-w-sm text-gray-100 text-lg md:text-2xl 2xl:text-4xl 2xl:max-w-lg">
            Everything you need to know about.
          </p>
        </div>
      </div>
    </div>
  );
};
export default HeroImage;
