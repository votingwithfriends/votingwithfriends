import MotionWrapper from "../components/layout/MotionWrapper";
import Layout from "../components/layout/Layout";
import React, { useState } from "react";
import SideBar from "../components/SideBar";

//NOTES:
// SideBar looks good. Needs to scroll with the page.

const Dashboard = () => {
  return (
    <Layout>
      <MotionWrapper>
        <SideBar />
        <div className="">
          <div className="flex min-h-screen flex-col content-center rounded-3xl  text-black dark:bg-transparent dark:text-white">
            {/* ./Header */}

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
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionWrapper>
    </Layout>
  );
};

export default Dashboard;
