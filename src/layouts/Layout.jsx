import React, { useState, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

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
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              {/* header */}
              <div>
                <Link to="/" className="flex items-center py-4 px-2">
                  <h1 className="font-semibold text-red-500 text-3xl">
                    FumoSite
                  </h1>
                </Link>
              </div>

              {/* Primary nav Items */}
              <div className="hidden md:flex items-center space-x-1">
                <Link
                  to="/"
                  className="py-4 px-2 text-gray-500 border-b-4 hover:border-red-500 transition duration-300 hover:text-red-500"
                >
                  Home
                </Link>
                <Link
                  to="/fumos"
                  className="py-4 px-2 text-gray-500 border-b-4 hover:border-red-500 transition duration-300 hover:text-red-500"
                >
                  Fumo list
                </Link>
                <Link
                  to="/about"
                  className="py-4 px-2 text-gray-500 border-b-4 hover:border-red-500 transition duration-300 hover:text-red-500"
                >
                  About
                </Link>
              </div>
            </div>
            {/* Secondary nav items */}
            <button
              onClick={switchColorTheme}
              className="hidden md:flex items-center space-x-3"
            >
              <div className="flex items-center w-16 h-8 rounded-full bg-red-500">
                <div className="bg-white h-6 w-6 mx-1 rounded-full"></div>
              </div>
            </button>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMobileNav} className="outline-none">
                <svg
                  className=" w-6 h-6 text-red-500 "
                  x-show="!showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={showMobileNav ? "" : "hidden"}>
          <ul className="">
            <li>
              <Link
                to="/"
                className="block text-sm px-2 py-4 text-white bg-red-500 font-semibold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/fumos"
                className="block text-sm px-2 py-4 text-white bg-red-500 font-semibold"
              >
                Fumo List
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-sm px-2 py-4 text-white bg-red-500 font-semibold"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <h2>{pageTitle}</h2>
        {children}
      </main>
    </div>
  );
};

export default Layout;
