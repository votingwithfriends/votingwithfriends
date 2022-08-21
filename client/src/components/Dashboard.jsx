const Dashboard = () => {
  return (
    <div class="{ 'dark': isDark }">
      <div className="flex min-h-screen flex-auto flex-shrink-0 flex-col bg-white text-black antialiased dark:bg-gray-700 dark:text-white">
        {/* ./Header */}
        {/* Sidebar */}
        <div className="sidebar fixed top-14 left-0 z-10 flex h-full w-14 flex-col border-none bg-blue-900 text-white transition-all duration-300 hover:w-64 dark:bg-gray-900 md:w-64">
          <div className="flex flex-grow flex-col justify-between overflow-y-auto overflow-x-hidden">
            <ul className="flex flex-col space-y-1 py-4">
              <li className="hidden px-5 md:block">
                <div className="flex h-8 flex-row items-center">
                  <div className="text-sm font-light uppercase tracking-wide text-gray-400">
                    Main
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white-600 hover:text-white-800 relative flex h-11 flex-row items-center border-l-4 border-transparent pr-6 hover:border-blue-500 hover:bg-blue-800 focus:outline-none dark:hover:border-gray-800 dark:hover:bg-gray-600"
                >
                  <span className="ml-4 inline-flex items-center justify-center">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 truncate text-sm tracking-wide">
                    Home
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white-600 hover:text-white-800 relative flex h-11 flex-row items-center border-l-4 border-transparent pr-6 hover:border-blue-500 hover:bg-blue-800 focus:outline-none dark:hover:border-gray-800 dark:hover:bg-gray-600"
                >
                  <span className="ml-4 inline-flex items-center justify-center">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 truncate text-sm tracking-wide">
                    Board
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white-600 hover:text-white-800 relative flex h-11 flex-row items-center border-l-4 border-transparent pr-6 hover:border-blue-500 hover:bg-blue-800 focus:outline-none dark:hover:border-gray-800 dark:hover:bg-gray-600"
                >
                  <span className="ml-4 inline-flex items-center justify-center">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 truncate text-sm tracking-wide">
                    Messages
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white-600 hover:text-white-800 relative flex h-11 flex-row items-center border-l-4 border-transparent pr-6 hover:border-blue-500 hover:bg-blue-800 focus:outline-none dark:hover:border-gray-800 dark:hover:bg-gray-600"
                >
                  <span className="ml-4 inline-flex items-center justify-center">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 truncate text-sm tracking-wide">
                    Notifications
                  </span>
                </a>
              </li>
              <li className="hidden px-5 md:block">
                <div className="mt-5 flex h-8 flex-row items-center">
                  <div className="text-sm font-light uppercase tracking-wide text-gray-400">
                    Settings
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white-600 hover:text-white-800 relative flex h-11 flex-row items-center border-l-4 border-transparent pr-6 hover:border-blue-500 hover:bg-blue-800 focus:outline-none dark:hover:border-gray-800 dark:hover:bg-gray-600"
                >
                  <span className="ml-4 inline-flex items-center justify-center">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 truncate text-sm tracking-wide">
                    Profile
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white-600 hover:text-white-800 relative flex h-11 flex-row items-center border-l-4 border-transparent pr-6 hover:border-blue-500 hover:bg-blue-800 focus:outline-none dark:hover:border-gray-800 dark:hover:bg-gray-600"
                >
                  <span className="ml-4 inline-flex items-center justify-center">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 truncate text-sm tracking-wide">
                    Settings
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* ./Sidebar */}
        <div className="ml-14 mt-14 mb-10 h-full md:ml-64">
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group flex items-center justify-between rounded-md border-b-4 border-blue-600 bg-blue-500 p-3 font-medium text-white shadow-lg dark:border-gray-600 dark:bg-gray-800">
              <div className="flex h-14 w-14 transform items-center justify-center rounded-full bg-white transition-all duration-300 group-hover:rotate-12">
                <svg
                  width={30}
                  height={30}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="transform stroke-current text-blue-800 transition-transform duration-500 ease-in-out dark:text-gray-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="text-right">
                <p className="text-2xl">1,257</p>
                <p>Visitors</p>
              </div>
            </div>
            <div className="group flex items-center justify-between rounded-md border-b-4 border-blue-600 bg-blue-500 p-3 font-medium text-white shadow-lg dark:border-gray-600 dark:bg-gray-800">
              <div className="flex h-14 w-14 transform items-center justify-center rounded-full bg-white transition-all duration-300 group-hover:rotate-12">
                <svg
                  width={30}
                  height={30}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="transform stroke-current text-blue-800 transition-transform duration-500 ease-in-out dark:text-gray-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <div className="text-right">
                <p className="text-2xl">557</p>
                <p>Orders</p>
              </div>
            </div>
            <div className="group flex items-center justify-between rounded-md border-b-4 border-blue-600 bg-blue-500 p-3 font-medium text-white shadow-lg dark:border-gray-600 dark:bg-gray-800">
              <div className="flex h-14 w-14 transform items-center justify-center rounded-full bg-white transition-all duration-300 group-hover:rotate-12">
                <svg
                  width={30}
                  height={30}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="transform stroke-current text-blue-800 transition-transform duration-500 ease-in-out dark:text-gray-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div className="text-right">
                <p className="text-2xl">$11,257</p>
                <p>Sales</p>
              </div>
            </div>
            <div className="group flex items-center justify-between rounded-md border-b-4 border-blue-600 bg-blue-500 p-3 font-medium text-white shadow-lg dark:border-gray-600 dark:bg-gray-800">
              <div className="flex h-14 w-14 transform items-center justify-center rounded-full bg-white transition-all duration-300 group-hover:rotate-12">
                <svg
                  width={30}
                  height={30}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="transform stroke-current text-blue-800 transition-transform duration-500 ease-in-out dark:text-gray-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-right">
                <p className="text-2xl">$75,257</p>
                <p>Balances</p>
              </div>
            </div>
          </div>
          {/* ./Statistics Cards */}
          <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-2">
            {/* Social Traffic */}
            <div className="relative mb-4 flex w-full min-w-0 flex-col break-words rounded bg-gray-50 shadow-lg dark:bg-gray-800 lg:mb-0">
              <div className="mb-0 rounded-t border-0 px-0">
                <div className="flex flex-wrap items-center px-4 py-2">
                  <div className="relative w-full max-w-full flex-1 flex-grow">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-gray-50">
                      Social Traffic
                    </h3>
                  </div>
                  <div className="relative w-full max-w-full flex-1 flex-grow text-right">
                    <button
                      className="mr-1 mb-1 rounded bg-blue-500 px-3 py-1 text-xs font-bold uppercase text-white outline-none transition-all duration-150 ease-linear focus:outline-none active:bg-blue-600 dark:bg-gray-100 dark:text-gray-800 dark:active:text-gray-700"
                      type="button"
                    >
                      See all
                    </button>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto">
                  <table className="w-full border-collapse items-center bg-transparent">
                    <thead>
                      <tr>
                        <th className="whitespace-nowrap border border-l-0 border-r-0 border-solid border-gray-200 bg-gray-100 px-4 py-3 text-left align-middle text-xs font-semibold uppercase text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100">
                          Referral
                        </th>
                        <th className="whitespace-nowrap border border-l-0 border-r-0 border-solid border-gray-200 bg-gray-100 px-4 py-3 text-left align-middle text-xs font-semibold uppercase text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100">
                          Visitors
                        </th>
                        <th className="min-w-140-px whitespace-nowrap border border-l-0 border-r-0 border-solid border-gray-200 bg-gray-100 px-4 py-3 text-left align-middle text-xs font-semibold uppercase text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-gray-700 dark:text-gray-100">
                        <th className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 text-left align-middle text-xs">
                          Facebook
                        </th>
                        <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 align-middle text-xs">
                          5,480
                        </td>
                        <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 align-middle text-xs">
                          <div className="flex items-center">
                            <span className="mr-2">70%</span>
                            <div className="relative w-full">
                              <div className="flex h-2 overflow-hidden rounded bg-blue-200 text-xs">
                                <div
                                  style={{ width: "70%" }}
                                  className="flex flex-col justify-center whitespace-nowrap bg-blue-600 text-center text-white shadow-none"
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="text-gray-700 dark:text-gray-100">
                        <th className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 text-left align-middle text-xs">
                          Twitter
                        </th>
                        <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 align-middle text-xs">
                          3,380
                        </td>
                        <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 align-middle text-xs">
                          <div className="flex items-center">
                            <span className="mr-2">40%</span>
                            <div className="relative w-full">
                              <div className="flex h-2 overflow-hidden rounded bg-blue-200 text-xs">
                                <div
                                  style={{ width: "40%" }}
                                  className="flex flex-col justify-center whitespace-nowrap bg-blue-500 text-center text-white shadow-none"
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="text-gray-700 dark:text-gray-100">
                        <th className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 text-left align-middle text-xs">
                          Instagram
                        </th>
                        <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 align-middle text-xs">
                          4,105
                        </td>
                        <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 align-middle text-xs">
                          <div className="flex items-center">
                            <span className="mr-2">45%</span>
                            <div className="relative w-full">
                              <div className="flex h-2 overflow-hidden rounded bg-pink-200 text-xs">
                                <div
                                  style={{ width: "45%" }}
                                  className="flex flex-col justify-center whitespace-nowrap bg-pink-500 text-center text-white shadow-none"
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="text-gray-700 dark:text-gray-100">
                        <th className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 text-left align-middle text-xs">
                          Google
                        </th>
                        <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 align-middle text-xs">
                          4,985
                        </td>
                        <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 align-middle text-xs">
                          <div className="flex items-center">
                            <span className="mr-2">60%</span>
                            <div className="relative w-full">
                              <div className="flex h-2 overflow-hidden rounded bg-red-200 text-xs">
                                <div
                                  style={{ width: "60%" }}
                                  className="flex flex-col justify-center whitespace-nowrap bg-red-500 text-center text-white shadow-none"
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="text-gray-700 dark:text-gray-100">
                        <th className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 text-left align-middle text-xs">
                          Linkedin
                        </th>
                        <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 align-middle text-xs">
                          2,250
                        </td>
                        <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 align-middle text-xs">
                          <div className="flex items-center">
                            <span className="mr-2">30%</span>
                            <div className="relative w-full">
                              <div className="flex h-2 overflow-hidden rounded bg-blue-200 text-xs">
                                <div
                                  style={{ width: "30%" }}
                                  className="flex flex-col justify-center whitespace-nowrap bg-blue-700 text-center text-white shadow-none"
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* ./Social Traffic */}
            {/* Recent Activities */}
            <div className="relative flex w-full min-w-0 flex-col break-words rounded bg-gray-50 shadow-lg dark:bg-gray-800">
              <div className="mb-0 rounded-t border-0 px-0">
                <div className="flex flex-wrap items-center px-4 py-2">
                  <div className="relative w-full max-w-full flex-1 flex-grow">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-gray-50">
                      Recent Activities
                    </h3>
                  </div>
                  <div className="relative w-full max-w-full flex-1 flex-grow text-right">
                    <button
                      className="mr-1 mb-1 rounded bg-blue-500 px-3 py-1 text-xs font-bold uppercase text-white outline-none transition-all duration-150 ease-linear focus:outline-none active:bg-blue-600 dark:bg-gray-100 dark:text-gray-800 dark:active:text-gray-700"
                      type="button"
                    >
                      See all
                    </button>
                  </div>
                </div>
                <div className="block w-full">
                  <div className="whitespace-nowrap border border-l-0 border-r-0 border-solid border-gray-200 bg-gray-100 px-4 py-3 text-left align-middle text-xs font-semibold uppercase text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100">
                    Today
                  </div>
                  <ul className="my-1">
                    <li className="flex px-4">
                      <div className="my-2 mr-3 h-9 w-9 flex-shrink-0 rounded-full bg-indigo-500">
                        <svg
                          className="h-9 w-9 fill-current text-indigo-50"
                          viewBox="0 0 36 36"
                        >
                          <path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
                        </svg>
                      </div>
                      <div className="flex flex-grow items-center border-b border-gray-100 py-2 text-sm text-gray-600 dark:border-gray-400 dark:text-gray-100">
                        <div className="flex flex-grow items-center justify-between">
                          <div className="self-center">
                            <a
                              className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100"
                              href="#0"
                              style={{ outline: "none" }}
                            >
                              Nick Mark
                            </a>{" "}
                            mentioned{" "}
                            <a
                              className="font-medium text-gray-800 dark:text-gray-50 dark:hover:text-gray-100"
                              href="#0"
                              style={{ outline: "none" }}
                            >
                              Sara Smith
                            </a>{" "}
                            in a new post
                          </div>
                          <div className="ml-2 flex-shrink-0">
                            <a
                              className="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                              href="#0"
                              style={{ outline: "none" }}
                            >
                              View
                              <span>
                                <svg
                                  width={20}
                                  height={20}
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="transform transition-transform duration-500 ease-in-out"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="flex px-4">
                      <div className="my-2 mr-3 h-9 w-9 flex-shrink-0 rounded-full bg-red-500">
                        <svg
                          className="h-9 w-9 fill-current text-red-50"
                          viewBox="0 0 36 36"
                        >
                          <path d="M25 24H11a1 1 0 01-1-1v-5h2v4h12v-4h2v5a1 1 0 01-1 1zM14 13h8v2h-8z" />
                        </svg>
                      </div>
                      <div className="flex flex-grow items-center border-gray-100 py-2 text-sm text-gray-600 dark:text-gray-50">
                        <div className="flex flex-grow items-center justify-between">
                          <div className="self-center">
                            The post{" "}
                            <a
                              className="font-medium text-gray-800 dark:text-gray-50 dark:hover:text-gray-100"
                              href="#0"
                              style={{ outline: "none" }}
                            >
                              Post Name
                            </a>{" "}
                            was removed by{" "}
                            <a
                              className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100"
                              href="#0"
                              style={{ outline: "none" }}
                            >
                              Nick Mark
                            </a>
                          </div>
                          <div className="ml-2 flex-shrink-0">
                            <a
                              className="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                              href="#0"
                              style={{ outline: "none" }}
                            >
                              View
                              <span>
                                <svg
                                  width={20}
                                  height={20}
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="transform transition-transform duration-500 ease-in-out"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="whitespace-nowrap border border-l-0 border-r-0 border-solid border-gray-200 bg-gray-100 px-4 py-3 text-left align-middle text-xs font-semibold uppercase text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100">
                    Yesterday
                  </div>
                  <ul className="my-1">
                    <li className="flex px-4">
                      <div className="my-2 mr-3 h-9 w-9 flex-shrink-0 rounded-full bg-green-500">
                        <svg
                          className="text-light-blue-50 h-9 w-9 fill-current"
                          viewBox="0 0 36 36"
                        >
                          <path d="M23 11v2.085c-2.841.401-4.41 2.462-5.8 4.315-1.449 1.932-2.7 3.6-5.2 3.6h-1v2h1c3.5 0 5.253-2.338 6.8-4.4 1.449-1.932 2.7-3.6 5.2-3.6h3l-4-4zM15.406 16.455c.066-.087.125-.162.194-.254.314-.419.656-.872 1.033-1.33C15.475 13.802 14.038 13 12 13h-1v2h1c1.471 0 2.505.586 3.406 1.455zM24 21c-1.471 0-2.505-.586-3.406-1.455-.066.087-.125.162-.194.254-.316.422-.656.873-1.028 1.328.959.878 2.108 1.573 3.628 1.788V25l4-4h-3z" />
                        </svg>
                      </div>
                      <div className="flex flex-grow items-center border-gray-100 py-2 text-sm text-gray-600 dark:text-gray-50">
                        <div className="flex flex-grow items-center justify-between">
                          <div className="self-center">
                            <a
                              className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100"
                              href="#0"
                              style={{ outline: "none" }}
                            >
                              240+
                            </a>{" "}
                            users have subscribed to{" "}
                            <a
                              className="font-medium text-gray-800 dark:text-gray-50 dark:hover:text-gray-100"
                              href="#0"
                              style={{ outline: "none" }}
                            >
                              Newsletter #1
                            </a>
                          </div>
                          <div className="ml-2 flex-shrink-0">
                            <a
                              className="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                              href="#0"
                              style={{ outline: "none" }}
                            >
                              View
                              <span>
                                <svg
                                  width={20}
                                  height={20}
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="transform transition-transform duration-500 ease-in-out"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* ./Recent Activities */}
          </div>
          {/* Task Summaries */}
          <div className="grid grid-cols-1 gap-4 p-4 text-black dark:text-white md:grid-cols-2 xl:grid-cols-3">
            <div className="md:col-span-2 xl:col-span-3">
              <h3 className="text-lg font-semibold">
                Task summaries of recent sprints
              </h3>
            </div>
            <div className="md:col-span-2 xl:col-span-1">
              <div className="rounded bg-gray-200 p-3 dark:bg-gray-800">
                <div className="flex justify-between py-1 text-black dark:text-white">
                  <h3 className="text-sm font-semibold">Tasks in TO DO</h3>
                  <svg
                    className="h-4 cursor-pointer fill-current text-gray-600 dark:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
                  </svg>
                </div>
                <div className="mt-2 text-sm text-black dark:text-gray-50">
                  <div className="mt-1 cursor-pointer rounded border-b border-gray-100 bg-white p-2 hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
                    Delete all references from the wiki
                  </div>
                  <div className="mt-1 cursor-pointer rounded border-b border-gray-100 bg-white p-2 hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
                    Remove analytics code
                  </div>
                  <div className="mt-1 cursor-pointer rounded border-b border-gray-100 bg-white p-2 hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
                    Do a mobile first layout
                    <div className="mt-2 ml-2 flex items-start justify-between text-gray-500 dark:text-gray-200">
                      <span className="flex items-center text-xs">
                        <svg
                          className="mr-1 h-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 50 50"
                        >
                          <path d="M11 4c-3.855 0-7 3.145-7 7v28c0 3.855 3.145 7 7 7h28c3.855 0 7-3.145 7-7V11c0-3.855-3.145-7-7-7zm0 2h28c2.773 0 5 2.227 5 5v28c0 2.773-2.227 5-5 5H11c-2.773 0-5-2.227-5-5V11c0-2.773 2.227-5 5-5zm25.234 9.832l-13.32 15.723-8.133-7.586-1.363 1.465 9.664 9.015 14.684-17.324z" />
                        </svg>
                        3/5
                      </span>
                      <img
                        src="https://i.imgur.com/OZaT7jl.png"
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  <div className="mt-1 cursor-pointer rounded border-b border-gray-100 bg-white p-2 hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
                    Check the meta tags
                  </div>
                  <div className="mt-1 cursor-pointer rounded border-b border-gray-100 bg-white p-2 hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
                    Think more tasks for this example
                    <div className="mt-2 ml-2 flex items-start justify-between text-gray-500 dark:text-gray-200">
                      <span className="flex items-center text-xs">
                        <svg
                          className="mr-1 h-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 50 50"
                        >
                          <path d="M11 4c-3.855 0-7 3.145-7 7v28c0 3.855 3.145 7 7 7h28c3.855 0 7-3.145 7-7V11c0-3.855-3.145-7-7-7zm0 2h28c2.773 0 5 2.227 5 5v28c0 2.773-2.227 5-5 5H11c-2.773 0-5-2.227-5-5V11c0-2.773 2.227-5 5-5zm25.234 9.832l-13.32 15.723-8.133-7.586-1.363 1.465 9.664 9.015 14.684-17.324z" />
                        </svg>
                        0/3
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Add a card...
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded bg-gray-200 p-3 dark:bg-gray-800">
                <div className="flex justify-between py-1 text-black dark:text-white">
                  <h3 className="text-sm font-semibold">
                    Tasks in DEVELOPMENT
                  </h3>
                  <svg
                    className="h-4 cursor-pointer fill-current text-gray-600 dark:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
                  </svg>
                </div>
                <div className="mt-2 text-sm text-black dark:text-gray-50">
                  <div className="mt-1 cursor-pointer rounded border-b border-gray-100 bg-white p-2 hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
                    Delete all references from the wiki
                  </div>
                  <div className="mt-1 cursor-pointer rounded border-b border-gray-100 bg-white p-2 hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
                    Remove analytics code
                  </div>
                  <div className="mt-1 cursor-pointer rounded border-b border-gray-100 bg-white p-2 hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
                    Do a mobile first layout
                    <div className="mt-2 ml-2 flex items-start justify-between text-xs text-white">
                      <span className="flex items-center rounded bg-pink-600 p-1 text-xs">
                        <svg
                          className="h-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2c-.8 0-1.5.7-1.5 1.5v.688C7.344 4.87 5 7.62 5 11v4.5l-2 2.313V19h18v-1.188L19 15.5V11c0-3.379-2.344-6.129-5.5-6.813V3.5c0-.8-.7-1.5-1.5-1.5zm-2 18c0 1.102.898 2 2 2 1.102 0 2-.898 2-2z" />
                        </svg>
                        2
                      </span>
                    </div>
                  </div>
                  <div className="mt-1 cursor-pointer rounded border-b border-gray-100 bg-white p-2 hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
                    Check the meta tags
                  </div>
                  <div className="mt-1 cursor-pointer rounded border-b border-gray-100 bg-white p-2 hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
                    Think more tasks for this example
                    <div className="mt-2 ml-2 flex items-start justify-between text-gray-500">
                      <span className="flex items-center text-xs">
                        <svg
                          className="mr-1 h-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 50 50"
                        >
                          <path d="M11 4c-3.855 0-7 3.145-7 7v28c0 3.855 3.145 7 7 7h28c3.855 0 7-3.145 7-7V11c0-3.855-3.145-7-7-7zm0 2h28c2.773 0 5 2.227 5 5v28c0 2.773-2.227 5-5 5H11c-2.773 0-5-2.227-5-5V11c0-2.773 2.227-5 5-5zm25.234 9.832l-13.32 15.723-8.133-7.586-1.363 1.465 9.664 9.015 14.684-17.324z" />
                        </svg>
                        0/3
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Add a card...
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded bg-gray-200 p-3 dark:bg-gray-800">
                <div className="flex justify-between py-1 text-black dark:text-white">
                  <h3 className="text-sm font-semibold">Tasks in QA</h3>
                  <svg
                    className="h-4 cursor-pointer fill-current text-gray-600 dark:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
                  </svg>
                </div>
                <div className="mt-2 text-sm text-black dark:text-gray-50">
                  <div className="mt-1 cursor-pointer rounded border-b border-gray-100 bg-white p-2 hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
                    Delete all references from the wiki
                  </div>
                  <div className="mt-1 cursor-pointer rounded border-b border-gray-100 bg-white p-2 hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
                    Remove analytics code
                  </div>
                  <div className="mt-1 cursor-pointer rounded border-b border-gray-100 bg-white p-2 hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
                    Do a mobile first layout
                  </div>
                  <div className="mt-1 cursor-pointer rounded border-b border-gray-100 bg-white p-2 hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
                    Check the meta tags
                  </div>
                  <div className="mt-1 cursor-pointer rounded border-b border-gray-100 bg-white p-2 hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-600 dark:hover:bg-gray-700">
                    Think more tasks for this example
                    <div className="mt-2 ml-2 flex items-start justify-between text-gray-500 dark:text-gray-200">
                      <span className="flex items-center text-xs">
                        <svg
                          className="mr-1 h-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 50 50"
                        >
                          <path d="M11 4c-3.855 0-7 3.145-7 7v28c0 3.855 3.145 7 7 7h28c3.855 0 7-3.145 7-7V11c0-3.855-3.145-7-7-7zm0 2h28c2.773 0 5 2.227 5 5v28c0 2.773-2.227 5-5 5H11c-2.773 0-5-2.227-5-5V11c0-2.773 2.227-5 5-5zm25.234 9.832l-13.32 15.723-8.133-7.586-1.363 1.465 9.664 9.015 14.684-17.324z" />
                        </svg>
                        0/3
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Add a card...
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ./Task Summaries */}
          {/* Client Table */}
          <div className="mx-4 mt-4">
            <div className="shadow-xs w-full overflow-hidden rounded-lg">
              <div className="w-full overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
                      <th className="px-4 py-3">Client</th>
                      <th className="px-4 py-3">Amount</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y bg-white dark:divide-gray-700 dark:bg-gray-800">
                    <tr className="bg-gray-50 text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-900">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div className="relative mr-3 hidden h-8 w-8 rounded-full md:block">
                            <img
                              className="h-full w-full rounded-full object-cover"
                              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <p className="font-semibold">Hans Burger</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              10x Developer
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">$855.85</td>
                      <td className="px-4 py-3 text-xs">
                        <span className="rounded-full bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700 dark:bg-green-700 dark:text-green-100">
                          {" "}
                          Approved{" "}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">15-01-2021</td>
                    </tr>
                    <tr className="bg-gray-50 text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-900">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div className="relative mr-3 hidden h-8 w-8 rounded-full md:block">
                            <img
                              className="h-full w-full rounded-full object-cover"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&facepad=3&fit=facearea&s=707b9c33066bf8808c934c8ab394dff6"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <p className="font-semibold">Jolina Angelie</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              Unemployed
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">$369.75</td>
                      <td className="px-4 py-3 text-xs">
                        <span className="rounded-full bg-yellow-100 px-2 py-1 font-semibold leading-tight text-yellow-700">
                          {" "}
                          Pending{" "}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">23-03-2021</td>
                    </tr>
                    <tr className="bg-gray-50 text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-900">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div className="relative mr-3 hidden h-8 w-8 rounded-full md:block">
                            <img
                              className="h-full w-full rounded-full object-cover"
                              src="https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=b8377ca9f985d80264279f277f3a67f5"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <p className="font-semibold">Dave Li</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              Influencer
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">$775.45</td>
                      <td className="px-4 py-3 text-xs">
                        <span className="rounded-full bg-gray-100 px-2 py-1 font-semibold leading-tight text-gray-700 dark:bg-gray-700 dark:text-gray-100">
                          {" "}
                          Expired{" "}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">09-02-2021</td>
                    </tr>
                    <tr className="bg-gray-50 text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-900">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div className="relative mr-3 hidden h-8 w-8 rounded-full md:block">
                            <img
                              className="h-full w-full rounded-full object-cover"
                              src="https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <p className="font-semibold">Rulia Joberts</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              Actress
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">$1276.75</td>
                      <td className="px-4 py-3 text-xs">
                        <span className="rounded-full bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700 dark:bg-green-700 dark:text-green-100">
                          {" "}
                          Approved{" "}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">17-04-2021</td>
                    </tr>
                    <tr className="bg-gray-50 text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-900">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div className="relative mr-3 hidden h-8 w-8 rounded-full md:block">
                            <img
                              className="h-full w-full rounded-full object-cover"
                              src="https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <p className="font-semibold">Hitney Wouston</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              Singer
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">$863.45</td>
                      <td className="px-4 py-3 text-xs">
                        <span className="rounded-full bg-red-100 px-2 py-1 font-semibold leading-tight text-red-700 dark:bg-red-700 dark:text-red-100">
                          {" "}
                          Denied{" "}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">11-01-2021</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grid border-t bg-gray-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 sm:grid-cols-9">
                <span className="col-span-3 flex items-center">
                  {" "}
                  Showing 21-30 of 100{" "}
                </span>
                <span className="col-span-2" />
                {/* Pagination */}
                <span className="col-span-4 mt-2 flex sm:mt-auto sm:justify-end">
                  <nav aria-label="Table navigation">
                    <ul className="inline-flex items-center">
                      <li>
                        <button
                          className="focus:shadow-outline-purple rounded-md rounded-l-lg px-3 py-1 focus:outline-none"
                          aria-label="Previous"
                        >
                          <svg
                            aria-hidden="true"
                            className="h-4 w-4 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                              clipRule="evenodd"
                              fillRule="evenodd"
                            />
                          </svg>
                        </button>
                      </li>
                      <li>
                        <button className="focus:shadow-outline-purple rounded-md px-3 py-1 focus:outline-none">
                          1
                        </button>
                      </li>
                      <li>
                        <button className="focus:shadow-outline-purple rounded-md px-3 py-1 focus:outline-none">
                          2
                        </button>
                      </li>
                      <li>
                        <button className="focus:shadow-outline-purple rounded-md border border-r-0 border-blue-600 bg-blue-600 px-3 py-1 text-white transition-colors duration-150 focus:outline-none dark:border-gray-100 dark:bg-gray-100 dark:text-gray-800">
                          3
                        </button>
                      </li>
                      <li>
                        <button className="focus:shadow-outline-purple rounded-md px-3 py-1 focus:outline-none">
                          4
                        </button>
                      </li>
                      <li>
                        <span className="px-3 py-1">...</span>
                      </li>
                      <li>
                        <button className="focus:shadow-outline-purple rounded-md px-3 py-1 focus:outline-none">
                          8
                        </button>
                      </li>
                      <li>
                        <button className="focus:shadow-outline-purple rounded-md px-3 py-1 focus:outline-none">
                          9
                        </button>
                      </li>
                      <li>
                        <button
                          className="focus:shadow-outline-purple rounded-md rounded-r-lg px-3 py-1 focus:outline-none"
                          aria-label="Next"
                        >
                          <svg
                            className="h-4 w-4 fill-current"
                            aria-hidden="true"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                              fillRule="evenodd"
                            />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </span>
              </div>
            </div>
          </div>
          {/* ./Client Table */}
          {/* Contact Form */}
          <div className="mx-4 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="mr-2 bg-gray-100 p-6 dark:bg-gray-800 sm:rounded-lg">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-800 dark:text-white sm:text-5xl">
                  Get in touch
                </h1>
                <p className="text-normal mt-2 text-lg font-medium text-gray-600 dark:text-gray-400 sm:text-2xl">
                  Fill in the form to submit any query
                </p>
                <div className="mt-8 flex items-center text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="h-8 w-8 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="text-md ml-4 w-40 font-semibold tracking-wide">
                    Dhaka, Street, State, Postal Code
                  </div>
                </div>
                <div className="mt-4 flex items-center text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="h-8 w-8 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="text-md ml-4 w-40 font-semibold tracking-wide">
                    +880 1234567890
                  </div>
                </div>
                <div className="mt-4 flex items-center text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="h-8 w-8 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="text-md ml-4 w-40 font-semibold tracking-wide">
                    info@demo.com
                  </div>
                </div>
              </div>
              <form className="flex flex-col justify-center p-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="hidden">
                    Full Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-100 mt-2 rounded-lg border border-gray-400 bg-white py-3 px-3 font-semibold text-gray-800 focus:border-blue-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50"
                  />
                </div>
                <div className="mt-2 flex flex-col">
                  <label htmlFor="email" className="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-100 mt-2 rounded-lg border border-gray-400 bg-white py-3 px-3 font-semibold text-gray-800 focus:border-blue-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50"
                  />
                </div>
                <div className="mt-2 flex flex-col">
                  <label htmlFor="tel" className="hidden">
                    Number
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="Telephone Number"
                    className="w-100 mt-2 rounded-lg border border-gray-400 bg-white py-3 px-3 font-semibold text-gray-800 focus:border-blue-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 rounded-lg bg-blue-600 py-3 px-6 font-bold text-white transition duration-300 ease-in-out hover:bg-blue-500 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-gray-200 md:w-32"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          {/* ./Contact Form */}
          {/* External resources */}
          <div className="mx-4 mt-8">
            <div className="rounded-lg border border-blue-500 bg-blue-50 p-4 shadow-md dark:border-gray-500 dark:bg-gray-800 dark:text-gray-50">
              <h4 className="text-lg font-semibold">
                Have taken ideas &amp; reused components from the following
                resources:
              </h4>
              <ul>
                <li className="mt-3">
                  <a
                    className="flex items-center text-blue-700 dark:text-gray-100"
                    href="https://tailwindcomponents.com/component/sidebar-navigation-1"
                    target="_blank"
                  >
                    <svg
                      width={20}
                      height={20}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="transform transition-transform duration-500 ease-in-out"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="inline-flex pl-2">Sidebar Navigation</span>
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="flex items-center text-blue-700 dark:text-gray-100"
                    href="https://tailwindcomponents.com/component/contact-form-1"
                    target="_blank"
                  >
                    <svg
                      width={20}
                      height={20}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="transform transition-transform duration-500 ease-in-out"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="inline-flex pl-2">Contact Form</span>
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="flex items-center text-blue-700 dark:text-gray-100"
                    href="https://tailwindcomponents.com/component/trello-panel-clone"
                    target="_blank"
                  >
                    <svg
                      width={20}
                      height={20}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="transform transition-transform duration-500 ease-in-out"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="inline-flex pl-2">
                      Section: Task Summaries
                    </span>
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="flex items-center text-blue-700 dark:text-gray-100"
                    href="https://windmill-dashboard.vercel.app/"
                    target="_blank"
                  >
                    <svg
                      width={20}
                      height={20}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="transform transition-transform duration-500 ease-in-out"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="inline-flex pl-2">
                      Section: Client Table
                    </span>
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="flex items-center text-blue-700 dark:text-gray-100"
                    href="https://demos.creative-tim.com/notus-js/pages/admin/dashboard.html"
                    target="_blank"
                  >
                    <svg
                      width={20}
                      height={20}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="transform transition-transform duration-500 ease-in-out"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="inline-flex pl-2">
                      Section: Social Traffic
                    </span>
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="flex items-center text-blue-700 dark:text-gray-100"
                    href="https://mosaic.cruip.com"
                    target="_blank"
                  >
                    <svg
                      width={20}
                      height={20}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="transform transition-transform duration-500 ease-in-out"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="inline-flex pl-2">
                      Section: Recent Activities
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* ./External resources */}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
