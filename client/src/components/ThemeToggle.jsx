import { useContext } from "react";
import { Theme } from "../context/Theme";
import { IoSunny, IoMoon } from "react-icons/io5";

const ThemeToggle = ({ className }) => {
  const { isDarkTheme, setIsDarkTheme } = useContext(Theme);

  return (
    <article
      className={`relative h-7 w-7 overflow-hidden rounded-full bg-zinc-900 transition-colors duration-300 ease-in-out dark:bg-zinc-700 lg:h-9 lg:w-9 lg:hover:bg-blue-600 lg:dark:hover:bg-cyan-600 ${className}`}
    >
      <section
        className={`absolute left-[1px] top-[1px] flex items-center gap-x-4 p-1 text-lg transition-all duration-300 ease-in-out lg:left-0 lg:top-0 lg:p-2 lg:text-xl ${
          isDarkTheme ? "translate-x-0" : "-translate-x-9"
        }`}
      >
        <IoSunny
          className={`transform cursor-pointer transition-transform duration-700 ${
            isDarkTheme ? "rotate-0 scale-100" : "rotate-180 scale-0"
          }`}
          onClick={() => setIsDarkTheme(false)}
        />
        <IoMoon
          className={`translate-x-[2px] transform cursor-pointer transition-transform duration-700 lg:translate-x-0 ${
            isDarkTheme ? "rotate-180 scale-0" : "rotate-0 scale-100"
          }`}
          onClick={() => setIsDarkTheme(true)}
        />
      </section>
    </article>
  );
};

export default ThemeToggle;
