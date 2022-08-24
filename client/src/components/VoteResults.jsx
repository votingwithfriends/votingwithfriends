import Layout from "./layout/Layout";
import MotionWrapper from "./layout/MotionWrapper";
import { QUERY_POLL_VOTES } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const VoteResults = () => {
  let params = useParams();
  const { loading, error, data } = useQuery(QUERY_POLL_VOTES, {
    variables: { id: params.id },
  });

  if (loading) return <h1>Loading poll results...</h1>;
  if (error) return `Error! ${error}`;

  const votesArr = data.poll.votes;
  const votesArrLength = data.poll.votes.length;

  function hellow(pollObj) {
    // create a unique array of choices
    const vote_objs = pollObj.poll.votes;
    const mapChoices = vote_objs.map((vote) => vote.choice_id);
    const uniqueArray = [...new Set(mapChoices)];

    // empty array to return a response
    let returnArr = [];

    for (let i = 0; i < uniqueArray.length; i++) {
      // filter vote_objs for only current choice
      let currentChoiceObj = vote_objs.filter(
        (vote) => vote.choice_id == uniqueArray[i]
      );

      // place all rank values into a single array
      let currentChoiceRanks = currentChoiceObj.map((current) => {
        return current.rank_value;
      });

      // reduce to a single score
      const rankScore = currentChoiceRanks.reduce(
        (initialScore, currentScore) => initialScore + currentScore,
        0
      );

      // push a results object to returnArr
      returnArr.push({ choice_id: uniqueArray[i], score: rankScore });
    }

    return returnArr;
  }

  const voteResults = hellow(data);

  return (
    <Layout>
      <MotionWrapper>
        <article className="mx-auto w-full max-w-screen-lg">
          {console.log(votesArr)}
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold md:text-3xl">
              Poll Results for:
              <span className="ml-1 text-2xl font-bold text-blue-500 md:text-3xl">
                {data.poll.title}
              </span>
            </h3>
            <p className="rounded bg-gray-200 p-2">Poll has ended</p>
          </div>
          <h4 className="mb-4 text-lg font-bold">
            Number of Votes:
            <span className="rounded border border-green-400 px-2 text-gray-300">
              {votesArrLength}
            </span>
          </h4>
          <ul className="">
            {voteResults.map(({ score, choice_id, ...rest }) => (
              <li key={choice_id}>
                <span className="font-bold text-green-600">{choice_id}</span>:{" "}
                {score}
              </li>
            ))}
          </ul>
        </article>
      </MotionWrapper>
    </Layout>
  );
};

export default VoteResults;
