import { useState, useEffect, useContext } from "react";
import { Theme } from "../../context/Theme";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const { isDarkTheme } = useContext(Theme);

  useEffect(() => {
    const htmlRoot = document.documentElement;
    isDarkTheme
      ? htmlRoot.classList.add("dark")
      : htmlRoot.classList.remove("dark");
  }, [isDarkTheme]);

  return (
    <div className="h-full w-full overflow-x-hidden bg-slate-50 text-deep-dark transition-colors duration-500 ease-out dark:bg-deep-dark dark:text-slate-100">
      <div className="grid h-full w-full grid-rows-[auto_1fr_auto]">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
