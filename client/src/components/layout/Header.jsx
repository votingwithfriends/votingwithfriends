import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import ThemeToggle from "../ThemeToggle";
import NavBar from "../NavBar";

const Header = () => {
  return (
    <header className="mx-auto w-full max-w-screen-xl p-6">
      <div className="flex items-center justify-between">
        <Link to="/">
          <p className="scale-110 text-2xl font-black  leading-none ">
            Voting With <br />
            Friends
          </p>
        </Link>

        {/* Render other links here only if user has been signed in */}
        <NavBar />

        <ul className="hidden items-center gap-x-6 lg:flex ">
          <li>
            <Link
              className="font-bold dark:text-gray-300 dark:hover:text-gray-100"
              to="/login"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              className="rounded bg-deep-dark px-4 py-2 text-white hover:bg-green-600 dark:bg-teal-500 dark:hover:bg-teal-700"
              to="/signup"
            >
              Sign Up
            </Link>
          </li>
          <li>
            <ThemeToggle className="text-white" />
          </li>
        </ul>
        <section className="lg:hidden">
          <IoMenu className="text-3xl" />
        </section>
      </div>
    </header>
  );
};

export default Header;