import Layout from "./layout/Layout";
import { useState } from "react";
import MotionWrapper from "./layout/MotionWrapper";
import {
  AiOutlineHome,
  AiOutlineBug,
  AiOutlineLogout,
  AiOutlineMenu,
} from "react-icons/ai";

//TO DO:
//Side bar renders funny on page refresh
//Set link names/Set routes
//Hamburger needs to populate right
//Change icon sizes
//Voting with friends Link

//Layout Render

const SideBar: React.FC = () => {
  return (
    <MotionWrapper>
      <div>
        <nav className="bg-transparent py-6 px-6 lg:hidden">
          <div className="flex items-center justify-between">
            <button className="navbar-burger flex items-center rounded focus:outline-none">
              <div className="text-xl font-bold">
                <AiOutlineMenu />
              </div>
            </button>
          </div>
        </nav>
        <div className="navbar-menu relative z-50 hidden lg:block">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-10 lg:hidden"></div>
          <nav className="fixed top-0 left-0 bottom-0 flex w-3/4 flex-col overflow-y-auto bg-gray-800 pt-6 pb-8 sm:max-w-xs lg:w-80">
            {/*VWF Side Nav Header */}
            <div className="mb-6 flex w-full items-center border-gray-700 px-6 pb-6 lg:border-b">
              <h1 className="font-bold">Voting With Friends!</h1>
            </div>
            {/*Menu header */}
            <div className="px-4 pb-6">
              <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">
                Menu
              </h3>

              {/*SideBar List Items */}
              <ul className="mb-8 text-sm font-medium">
                <li>
                  {/*Home*/}
                  <a
                    className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-900"
                    href="http://localhost:5173/#"
                  >
                    {/*Home Icon */}
                    <span className="mr-3 inline-block ">
                      <div>
                        <AiOutlineHome />
                      </div>
                    </span>
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center rounded py-3 pl-3 pr-2 text-gray-50 hover:bg-gray-900"
                    href="#"
                  >
                    {/*Link 1 Icon*/}
                    <span className="mr-3 inline-block ">
                      <div>
                        <AiOutlineBug />
                      </div>
                    </span>
                    <span>Link 1</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-900"
                    href="#"
                  >
                    {/*Link 2 Icon*/}
                    <span className="mr-3 inline-block ">
                      <div>
                        <AiOutlineBug />
                      </div>
                    </span>
                    <span>Link 2</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-900"
                    href="#"
                  >
                    {/*Link 3 Icon*/}
                    <span className="mr-3 inline-block ">
                      <div>
                        <AiOutlineBug />
                      </div>
                    </span>
                    <span>Link 3</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-900"
                    href="#"
                  >
                    {/*Link 4 Icon*/}
                    <span className="mr-3 inline-block ">
                      <div>
                        <AiOutlineBug />
                      </div>
                    </span>
                    <span>Link 4</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-900"
                    href="#"
                  >
                    {/*Link 5 Icon*/}
                    <span className="mr-3 inline-block ">
                      <div>
                        <AiOutlineBug />
                      </div>
                    </span>
                    <span>Link 5</span>
                  </a>
                </li>
              </ul>
              <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">
                Polls
              </h3>
              <ul className="text-sm font-medium">
                <li>
                  {/*Create New Poll Link */}
                  <a
                    className="flex items-center rounded py-3 pl-3 pr-2 text-gray-50 hover:bg-gray-900"
                    href="http://localhost:5173/createnewpoll"
                  >
                    {/*Create Poll*/}
                    <span className="mr-3 inline-block ">
                      <div>
                        <AiOutlineBug />
                      </div>
                    </span>
                    <span>Create New Poll</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-900"
                    href="#"
                  >
                    {/*Delete Poll Icon*/}
                    <span className="mr-3 inline-block ">
                      <div>
                        <AiOutlineBug />
                      </div>
                    </span>
                    <span>Delete Poll</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-900"
                    href="#"
                  >
                    {/*History Icon*/}
                    <span className="mr-3 inline-block ">
                      <div>
                        <AiOutlineBug />
                      </div>
                    </span>
                    <span>History</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-900"
                    href="#"
                  >
                    {/*Link 7 Icon*/}
                    <span className="mr-3 inline-block ">
                      <div>
                        <AiOutlineBug />
                      </div>
                    </span>
                    <span>Link 7</span>
                  </a>
                </li>
              </ul>
              <div className="pt-8">
                <a
                  className="flex items-center rounded py-3 pl-3 pr-2 text-gray-50 hover:bg-gray-900"
                  href="#"
                >
                  {/*Link 7 Icon*/}
                  <span className="mr-3 inline-block ">
                    <div>
                      <AiOutlineLogout />
                    </div>
                  </span>
                  <span>Log Out</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div className="mx-auto lg:ml-80"></div>
      </div>
    </MotionWrapper>
  );
};

export default SideBar;
