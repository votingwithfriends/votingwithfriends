import MotionWrapper from "../components/layout/MotionWrapper";
import Layout from "../components/layout/Layout";
import { QUERY_POLLS } from "../utils/queries";
import { IoPerson } from "react-icons/io5";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

//NOTES:
// What you see is a placeholder for a working route. It will be modified to fit our page.

const OpenPolls = () => {
  const { loading, error, data: pollData } = useQuery(QUERY_POLLS);
  if (loading) return <h1>Loading polls...</h1>;
  const pollArr = pollData.polls;

  return (
    <Layout>
      <MotionWrapper>
        <article className="mx-auto mt-20 w-full max-w-screen-md">
          <h2 className="mb-8 text-xl font-bold md:text-3xl">Polls</h2>
          <ul className="flex flex-col gap-y-4">
            {pollArr.map(({ _id, title, is_open, user, ...rest }) => (
              <li
                className="rounded bg-blue-100 transition-all ease-in-out dark:bg-zinc-700"
                key={_id}
              >
                <Link to={is_open ? `/vote/${_id}` : `/voteresults/${_id}`}>
                  <div className="block p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg font-bold">{title}</p>
                        <p className="opacity-70">
                          <IoPerson className="mr-1 inline" />
                          {user.username}
                        </p>
                      </div>
                      {is_open && (
                        <p className="rounded bg-blue-500 py-2 px-4 text-white dark:bg-cyan-600">
                          Active
                        </p>
                      )}
                    </div>
                  </div>
                </Link>

                {!is_open && (
                  <a href="/dashboard/results/" className="block p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg font-bold"></p>
                        <p className="text-gray-600"></p>
                      </div>
                      <p className="rounded border-2 border-gray-200 py-2 px-4 text-center text-sm">
                        Poll Closed
                        <br />
                        <span className="font-bold text-green-500">
                          View Results
                        </span>
                      </p>
                    </div>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </article>
      </MotionWrapper>
    </Layout>
  );
};

export default OpenPolls;
