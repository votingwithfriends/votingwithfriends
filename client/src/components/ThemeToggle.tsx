import { useState, useEffect } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

interface Props {
  styles?: String;
}

const ThemeToggle: React.FC<Props> = ({ styles }) => {
  const [darkMode, setDarkMode] = useState<boolean>(
    window.matchMedia("(prefers-color-scheme:dark)").matches
  );

  useEffect(() => {
    const htmlRoot = document.documentElement;
    darkMode
      ? htmlRoot.classList.add("dark")
      : htmlRoot.classList.remove("dark");
  }, [darkMode]);

  return (
    <article
      className={`bg-gray-200 dark:bg-deep-darker rounded-full p-2 overflow-hidden w-9 h-9 relative ${styles}`}
    >
      <section
        className={`flex items-center gap-x-4 absolute transition-all text-xl ease-in-out duration-700 top-2 ${
          darkMode ? "translate-x-0" : "-translate-x-9"
        }`}
      >
        <IoSunny
          className={`cursor-pointer transform transition-transform duration-1000 ${
            darkMode ? "rotate-0" : "rotate-180"
          }`}
          onClick={() => setDarkMode(false)}
        />
        <IoMoon
          className={`cursor-pointer transform transition-transform duration-1000 ${
            darkMode ? "rotate-180" : "rotate-0"
          }`}
          onClick={() => setDarkMode(true)}
        />
      </section>
    </article>
  );
};

export default ThemeToggle;
