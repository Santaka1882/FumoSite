import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => (
  <div className="w-full mt-8 bg-red-500">
    <div className="flex flex-col items-center w-4/5 m-auto py-4">
      <h2 className="text-yellow-200 text-2xl font-semibold">Disclaimer!</h2>
      <p className="text-gray-100 text-center">
        This page is a re-design of an existing page, all information was
        extracted from the original site, you can view it{" "}
        <a href="https://fumo.website/" className="text-yellow-200">
          here
        </a>
        .
      </p>
      <div className="flex flex-col items-center mt-4">
        <h2 className="text-yellow-200 text-2xl font-semibold">Contact</h2>
        <p className="text-gray-100 text-center">
          You can contact with me using Twitter, if you want more info about the
          website itself, visit the proyect repository on Github.
        </p>
        <ul className="flex space-x-6 mt-3">
          <li>
            <a href="https://twitter.com/Santaka1234">
              <StaticImage
                src="../images/twitter-logo.png"
                alt="Twitter Logo"
                className="w-14 rounded-lg"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/Santaka1882/FumoSite">
              <StaticImage
                src="../images/github-logo.png"
                alt="github logo"
                className="w-14 rounded-lg"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
