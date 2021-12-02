import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const HeroImage = () => (
  <div className="flex flex-col-reverse items-center w-4/5 my-4 mx-auto">
    <div>
      <h2 className="pt-4 text-red-500 font-semibold text-2xl text-center">Fumos</h2>
      <p className="text-gray-500 text-lg text-center">
        Everything you need to know about, more beautiful than ever.
      </p>
    </div>
    <StaticImage
      src="../images/HeroImage.jpg"
      alt="Reimu fumo"
      className="max-w-sm rounded-full"
    />
  </div>
);
export default HeroImage;
