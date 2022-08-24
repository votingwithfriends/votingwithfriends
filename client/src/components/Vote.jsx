import Layout from "./layout/Layout";
import MotionWrapper from "./layout/MotionWrapper";
import { QUERY_POLL } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const Vote = () => {
  let params = useParams();
  const { loading, error, data } = useQuery(QUERY_POLL, {
    variables: { id: params.id },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  const pollChoices = data.poll.choices;

  return (
    <Layout>
      <MotionWrapper>
        <article>
          <p className="mb-4 font-bold md:text-2xl">
            Please select your top three options below, leaving the rest blank.
          </p>
          <h3 className="mb-8 text-xl font-bold text-blue-500 md:text-2xl">
            {data.poll.title}
          </h3>
          <form id="vote-form">
            <div className="flex items-center justify-between">
              <ul
                id="choice-list"
                className="flex flex-col gap-y-4"
                data-poll_id="{{id}}"
              >
                {pollChoices.map(({ _id, choice_name, __typename }) => (
                  <li
                    className="flex items-center justify-between rounded px-4 py-2"
                    data-choice={choice_name}
                    key={_id}
                  >
                    <label htmlFor="choice" className="font-bold">
                      {choice_name}
                    </label>
                    <select name="choice" className="ml-6 p-2 text-gray-700">
                      <option value="0">None</option>
                      <option className="text-green-500" value="6">
                        1st Place
                      </option>
                      <option className="text-yellow-500" value="3">
                        2nd Place
                      </option>
                      <option className="text-red-500" value="2">
                        3rd Place
                      </option>
                    </select>
                  </li>
                ))}
              </ul>
            </div>
            <button
              type="submit"
              className="mt-8 rounded bg-green-500 p-4 text-white hover:bg-green-400"
            >
              Submit Votes
            </button>
          </form>
        </article>
        <script src="/javascript/vote.js"></script>
      </MotionWrapper>
    </Layout>
  );
};

export default Vote;
