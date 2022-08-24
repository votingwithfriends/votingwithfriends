import { Link } from "react-router-dom";
import {
  IoMenu,
  IoCloseCircle,
  IoApps,
  IoAdd,
  IoPerson,
  IoExit,
  IoEnter,
  IoPersonAdd,
  IoPodium,
} from "react-icons/io5";
import ThemeToggle from "../ThemeToggle";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/Auth";

const Header = () => {
  const { data: userData } = useQuery(QUERY_ME);

  const [hamburgerState, setHamburgerState] = useState(false);
  const loggedIn = useContext(AuthContext);

  return (
    <header className="relative mx-auto w-full max-w-screen-xl p-6">
      <div className="flex items-center justify-between">
        <Link to="/">
          <p className="scale-110 text-2xl font-black  leading-none ">
            Voting With <br />
            Friends
          </p>
        </Link>
        {loggedIn && (
          <ul className="hidden items-center gap-x-8 font-bold lg:flex">
            <li>
              <Link
                className="flex items-center gap-x-2 hover:text-blue-500 dark:hover:text-cyan-500"
                to="/dashboard"
              >
                Dashboard
                <IoApps />
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-x-2 hover:text-blue-500 dark:hover:text-cyan-500"
                to="/new-poll"
              >
                Create New Poll
                <IoAdd />
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-x-2 hover:text-blue-500 dark:hover:text-cyan-500"
                to="/openpolls"
              >
                View Polls
                <IoPodium />
              </Link>
            </li>
          </ul>
        )}
        <ul className="hidden items-center gap-x-6 lg:flex ">
          {loggedIn ? (
            <>
              {userData && (
                <li>
                  <p className="cursor-pointer rounded border-2 border-blue-500 px-4 py-[6px] font-bold text-blue-500 dark:border-cyan-500 dark:text-cyan-500">
                    {userData.me.username}
                  </p>
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
          <IoMenu
            onClick={() => setHamburgerState(true)}
            className="cursor-pointer text-3xl"
          />
          <div
            className={`absolute top-0 right-0 z-50 w-2/3 transform rounded bg-white p-6 shadow-lg transition-transform duration-500 ease-in-out dark:bg-black dark:text-white md:w-1/3 ${
              hamburgerState ? "translate-x-0" : "translate-x-[100vw]"
            }`}
          >
            <ul className="flex flex-col items-end gap-y-6 text-lg">
              <li>
                <IoCloseCircle
                  onClick={() => setHamburgerState(false)}
                  className="cursor-pointer text-3xl text-blue-600 dark:text-cyan-500"
                />
              </li>
              {Auth.loggedIn() ? (
                <>
                  {userData && (
                    <li className="flex items-center gap-x-2">
                      <p className="text-xl font-bold">
                        {userData.me.username}
                      </p>
                      <IoPerson />
                    </li>
                  )}
                  <li>
                    <Link className="flex items-center gap-x-2" to="/dashboard">
                      Dashboard
                      <IoApps />
                    </Link>
                  </li>
                  <li>
                    <Link className="flex items-center gap-x-2" to="/new-poll">
                      Create New Poll
                      <IoAdd />
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => Auth.logout()}
                      className="flex items-center gap-x-2"
                    >
                      Logout
                      <IoExit />
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link className="flex items-center gap-x-2" to="/login">
                      Login
                      <IoEnter className="text-2xl" />
                    </Link>
                  </li>
                  <li>
                    <Link className="flex items-center gap-x-2" to="/signup">
                      Sign Up
                      <IoPersonAdd />
                    </Link>
                  </li>
                </>
              )}
              <li>
                <ThemeToggle className="text-white" />
              </li>
            </ul>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
