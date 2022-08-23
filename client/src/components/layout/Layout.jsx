import { useEffect, useContext } from "react";
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
    <div className="h-full w-full overflow-x-hidden bg-slate-50 text-zinc-900 transition-colors duration-500 ease-out dark:bg-zinc-900 dark:text-slate-100">
      <div className="grid h-full w-full grid-rows-[auto_1fr_auto]">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
