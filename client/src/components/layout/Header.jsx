import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import ThemeToggle from "../ThemeToggle";
import NavBar from "../NavBar";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

const Header = () => {
  const { data: userData } = useQuery(QUERY_ME);

  return (
    <header className="mx-auto w-full max-w-screen-xl p-6">
      <div className="flex items-center justify-between">
        <Link to="/">
          <p className="scale-110 text-2xl font-black  leading-none ">
            Voting With <br />
            Friends
          </p>
        </Link>

        {Auth.loggedIn() && <NavBar />}

        <ul className="hidden items-center gap-x-6 lg:flex ">
          {Auth.loggedIn() ? (
            <>
              {userData && (
                <li className="font-bold">
                  <p>{userData.me.username}</p>
                </li>
              )}

              <li>
                <button
                  onClick={() => Auth.logout()}
                  className="rounded bg-zinc-900 px-4 py-2 text-white hover:bg-blue-600 dark:bg-cyan-600 dark:hover:bg-cyan-500"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
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
                  className="rounded bg-zinc-900 px-4 py-2 text-white hover:bg-blue-600 dark:bg-cyan-600 dark:hover:bg-cyan-500"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}

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
