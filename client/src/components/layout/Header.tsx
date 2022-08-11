import { IoMenu } from "react-icons/io5";
import ThemeToggle from "../ThemeToggle";

const Header: React.FC = () => {
  return (
    <header className="mx-auto w-full max-w-screen-xl p-6">
      <nav className="flex items-center justify-between">
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
