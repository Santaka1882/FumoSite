import React, { useState, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { darkMode } from "../../tailwind.config";

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

  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    const darkmodeOn = JSON.parse(localStorage.getItem(KEY));
    if (darkmodeOn) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode])

  const switchColorTheme = () => {
    setIsDarkMode(!isDarkMode)
  };

  return (
    <div className="bg-white dark:bg-black">
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header>
        {data.site.siteMetadata.title}
        <button onClick={switchColorTheme}>darkmode</button>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/fumos">Fumo list</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
