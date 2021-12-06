import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const HeroImage = () => (
  <div className="flex flex-col items-center w-full p-4 mb-4 mx-auto bg-red-500">
    <StaticImage
      src="../images/HeroImage.jpg"
      alt="Reimu fumo"
      className="w-60 max-w-sm rounded-full"
    />
    <div>
      <h2 className="pt-4 text-yellow-200 font-semibold text-2xl text-center">Fumos</h2>
      <p className="text-gray-100 text-lg text-center">
        Everything you need to know about, more beautiful than ever.
      </p>
    </div>
  </div>
);
export default HeroImage;
