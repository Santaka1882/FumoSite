import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const HeroImage = () => (
  <div className="flex flex-col items-center w-full py-8 my-4 bg-red-500">
    <div className='flex flex-col items-center w-4/5 max-w-7xl mx-auto bg-red-500 md:flex-row-reverse justify-between space-x-5'>
      <StaticImage
        src="../images/HeroImage.jpg"
        alt="Reimu fumo"
        className="w-60 max-w-sm rounded-full md:rounded-lg"
      />
      <div className="max-w-sm text-center md:text-left">
        <h2 className="pt-4 text-yellow-200 font-semibold text-2xl md:py-4 md:text-4xl">
          Fumos
        </h2>
        <p className="max-w-sm text-gray-100 text-lg md:text-xl">
          Everything you need to know about, more beautiful than ever.
        </p>
      </div>
    </div>
  </div>
);
export default HeroImage;
