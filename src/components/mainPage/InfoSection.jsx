import React, { useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";

// Animations
import Aos from "aos";
import "aos/dist/aos.css";

const InfoSection = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="w-4/5 mx-auto my-10 mt-2 max-w-7xl 2xl:mt-40 2xl:mb-12">
      <div className="flex lg:mt-14 justify-around items-center" data-aos="fade-up">
        <div className="max-w-xl 2xl:max-w-2xl">
          <h3 className="text-red-500 font-semibold text-3xl mb-2 mt-6 2xl:text-6xl 2xl:mb-4">
            What is a Fumo?
          </h3>
          <p className="w-full text-lg mb-4 md:text-xl 2xl:text-2xl">
            Fumos are a line of high-quality plush character figures
            manufactured and sold by the Japanese company{" "}
            <a href="https://www.gift-gift.jp/" className="text-red-500" target="_blank" rel="noreferrer">
              Gift
            </a>
            . Fumos exist for multiple franchises, but most notably the{" "}
            <a
              href="https://en.touhouwiki.net/wiki/Touhou_Wiki"
              className="text-red-500"
              target="_blank"
              rel="noreferrer"
            >
              Touhou Project
            </a>
            . Touhou Fumos are designed by{" "}
            <a href="https://royalcat.xyz/" className="text-red-500" target="_blank" rel="noreferrer">
              Royalcat
            </a>
            .
          </p>
        </div>
        <StaticImage
          src="../../images/Cirno.jpg"
          alt="Cirno-Fumo"
          className="hidden-i lg:block-i rounded-lg w-80"
        />
      </div>
      <div className="flex lg:mt-14 justify-around items-center" data-aos="fade-up">
        <StaticImage
          src="../../images/Flandre.jpg"
          alt="Flandre-Fumo"
          className="hidden-i lg:block-i rounded-lg max-w-xs 2xl:max-w-none w-80"
        />
        <div className="max-w-xl 2xl:max-w-2xl text-right lg:ml-0">
          <h3 className="text-red-500 font-semibold text-3xl mb-2 mt-6 2xl:text-6xl 2xl:mb-4">
            Accessibility:
          </h3>
          <p className="w-full text-lg mb-4 md:text-xl lg:max-w-l 2xl:text-2xl 2xl:max-w-2xl">
            Fumos are generally difficult to purchase, even in Japan, due to
            their relative scarcity. Fumos are out-of-stock as a rule, and Gift
            typically only manufactures them twice a year, when they open for
            limited pre-orders. For most restocks, Gift does not ship outside of
            Japan; when they do, the sales go through the AmiAmi store.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
