import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

// Components
import Logo from "../components/layout/Logo";
import PrimaryNavItems from "../components/layout/PrimaryNavItems";
import ColorThemeSwitch from "../components/layout/ColorThemeSwitch";
import MobileMenuButton from "../components/layout/MobileMenuButton";
import MobileNavMenu from "../components/layout/MobileNavMenu";
import Footer from "../components/layout/Footer";

const KEY = "FumoSite.Darkmode";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [darkMode, setDarkMode] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  /* 
     When the page render for the first time: Fetch the KEY item 
     from the local storage, if true, set "darkMode" to true
   */
  useEffect(() => {
    const darkmodeOn = JSON.parse(localStorage.getItem(KEY));
    if (darkmodeOn) {
      setDarkMode(true);
    }
  }, []);

  /*
    Each time the value of "darkMode" changes:
    Save that value in the local storage and 
    add or remove the "dark" class to the HTML tag
    more info here: https://tailwindcss.com/docs/dark-mode
  */
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const switchColorTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <div>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between md:justify-center lg:justify-between">
            <div className="flex space-x-7">
              <Logo />
              <PrimaryNavItems />
            </div>
            <ColorThemeSwitch onClick={switchColorTheme} />
            <MobileMenuButton onClick={toggleMobileNav} />
          </div>
        </div>
        <MobileNavMenu show={showMobileNav} />
      </nav>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
