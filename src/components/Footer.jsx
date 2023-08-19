import React from "react";

const Footer = () => (
  <div className="w-full mt-8 bg-red-500">
    <div className="flex flex-col items-center w-4/5 m-auto py-4 md:flex-row md:items-start space-x-4">
      <div className="flex flex-col items-center mt-4">
        <h2 className="text-yellow-200 text-2xl font-semibold 2xl:text-3xl">Disclaimer!</h2>
        <p className="text-gray-100 text-center 2xl:text-2xl">
          This page is a re-design of an existing page, all information was
          extracted from the original site, you can view it{" "}
          <a href="https://fumo.website/" className="text-yellow-200" target="_blank">
            here
          </a>
          .
        </p>
      </div>
      <div className="flex flex-col items-center mt-4">
        <h2 className="text-yellow-200 text-2xl font-semibold 2xl:text-3xl">Contact</h2>
        <p className="text-gray-100 text-center 2xl:text-2xl">
          You can contact with me using <a href="https://twitter.com/Santaka1234" className="text-yellow-200" target="_blank">Twitter</a> , if you want more info about the
          website itself, visit the proyect repository on <a href="https://github.com/Santaka1882/FumoSite" className="text-yellow-200" target="_blank">Github</a>.
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
