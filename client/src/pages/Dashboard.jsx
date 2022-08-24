import MotionWrapper from "../components/layout/MotionWrapper";
import Layout from "../components/layout/Layout";
import React, { useState } from "react";
import { QUERY_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

//NOTES:
// SideBar looks good. Needs to scroll with the page.

const Dashboard = () => {
  const { loading, error, data: userData } = useQuery(QUERY_ME);
  if (loading) return <h1>Loading data...</h1>;
  if (error) return `Error: ${error}`;

  const userPolls = userData.me.polls;
  return (
    <Layout>
      <MotionWrapper>
        <div className="mt-20 content-center">
          <div className="flex min-h-screen flex-col text-black dark:bg-transparent dark:text-white ">
            <div className="m-10 h-full md:m-8">
              <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-2">
                <div className="relative mb-4 flex w-full min-w-0 flex-col break-words rounded-xl shadow-lg dark:bg-zinc-700 lg:mb-0">
                  <div className="mb-0 rounded-xl px-0">
                    <div className="flex flex-wrap items-center px-4 py-2">
                      <div className="relative w-full max-w-full flex-1 flex-grow">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
                          Your Polls
                        </h3>
                      </div>
                    </div>

                    <div className="block w-full overflow-x-auto">
                      <table className="w-full border-collapse items-center bg-transparent">
                        <thead>
                          <tr>
                            <th className="whitespace-nowrap border border-l-0 border-r-0 border-solid px-4 py-3 text-left align-middle text-xs font-semibold text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100">
                              Recent Polls
                            </th>
                            <th className="whitespace-nowrap border border-l-0 border-r-0 border-solid px-4 py-3 text-left align-middle text-xs font-semibold uppercase text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100"></th>
                            <th className="min-w-140-px whitespace-nowrap border border-l-0 border-r-0 border-solid border-gray-200 px-4 py-3 text-left align-middle text-xs font-semibold uppercase text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100" />
                          </tr>
                        </thead>
                        <tbody className="divide-y bg-white dark:divide-slate-700 dark:bg-zinc-800">
                          {userPolls.map(({ title, _id, ...rest }) => (
                            <tr
                              key={_id}
                              className="bg-gray-50 text-gray-700 hover:bg-gray-100 dark:bg-zinc-800 dark:text-gray-400 dark:hover:bg-gray-900"
                            >
                              <th className="text-s whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 text-left align-middle ">
                                <Link to={`/vote/${_id}`}>{title}</Link>
                              </th>
                              <td className="text-s whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 align-middle"></td>
                              <td className="text-s whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-4 align-middle">
                                <div className="flex items-center"></div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Recent Polls */}
                <div className="relative flex w-full min-w-0 flex-col break-words rounded-xl bg-gray-50 shadow-lg dark:bg-gray-800">
                  <div className="mb-0 border-0 px-0">
                    <div className="flex flex-wrap items-center px-4 py-2">
                      <div className="relative w-full max-w-full flex-1 flex-grow">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
                          Friends
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Friends Table */}
              {/*<div className="relative mx-4 mt-4 flex min-w-0 flex-col break-words rounded-xl shadow-lg dark:bg-gray-800">
                <div className="shadow-m w-full overflow-hidden rounded-lg">
                  <div className="w-full overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-s border-b bg-gray-50 text-left font-semibold uppercase tracking-wide text-black dark:border-gray-600 dark:bg-gray-800 dark:text-slate-100">
                          <th className="px-4 py-3">Friends</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y bg-white dark:divide-slate-700 dark:bg-gray-800">
                        <tr className="bg-gray-50 text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-900">
                          <td className="px-4 py-3">
                            <div className="flex items-center text-sm"></div>
                          </td>
                        </tr>
                        <tr className="bg-gray-50 text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-900"></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </MotionWrapper>
    </Layout>
  );
};

export default Dashboard;
