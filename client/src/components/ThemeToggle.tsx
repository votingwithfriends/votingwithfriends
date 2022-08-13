import { useContext } from "react";
import { Theme } from "../context/Theme";
import { IoSunny, IoMoon } from "react-icons/io5";

interface Props {
  className?: String;
}

const ThemeToggle: React.FC<Props> = ({ className }) => {
  const { isDarkTheme, setIsDarkTheme } = useContext(Theme);

  return (
    <article
      className={`relative h-9 w-9 overflow-hidden rounded-full bg-deep-dark p-2 dark:bg-deep-darker ${className}`}
    >
      <section
        className={`absolute top-2 flex items-center gap-x-4 text-xl transition-all duration-300 ease-in-out ${
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
          className={`transform cursor-pointer transition-transform duration-700 ${
            isDarkTheme ? "rotate-180 scale-0" : "rotate-0 scale-100"
          }`}
          onClick={() => setIsDarkTheme(true)}
        />
      </section>
    </article>
  );
};

export default ThemeToggle;
