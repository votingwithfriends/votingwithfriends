import { IoMenu } from "react-icons/io5";
import ThemeToggle from "../ThemeToggle";

const Header: React.FC = () => {
  return (
    <header className="p-6 w-full max-w-screen-xl mx-auto">
      <nav className="flex justify-between items-center">
        <p className="text-2xl font-black">
          Voting With <br />
          Friends
        </p>
        <ThemeToggle styles="hidden lg:block" />
        <section className="lg:hidden">
          <IoMenu className="text-3xl" />
        </section>
      </nav>
    </header>
  );
};

export default Header;
