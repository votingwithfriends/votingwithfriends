import MotionWrapper from "../components/layout/MotionWrapper";
import Layout from "../components/layout/Layout";

//NOTES:
// What you see is a placeholder for a working route. It will be modified to fit our page.

const OpenPolls = () => {
  return (
    <Layout>
      <MotionWrapper>
        <article class="mx-auto w-full max-w-screen-lg">
          <div class="flex items-center justify-between">
            <h3 class="text-2xl font-bold md:text-3xl">
              Poll Results for:
              <span class="ml-1 text-2xl font-bold text-blue-500 md:text-3xl"></span>
            </h3>

            <button
              type="submit"
              class="rounded bg-red-400 p-2 text-white"
              id="close-poll-btn"
              data-poll_id="{{id}}"
            >
              Close Poll
            </button>

            <p class="rounded bg-gray-200 p-2">Poll has ended</p>
          </div>
          <h4 class="mb-4 text-lg font-bold">
            Number of Voters:
            <span class="rounded border border-green-400 px-2 text-green-700"></span>
          </h4>
          <ul class="hidden">
            <li
              data-choice-name="{{choice_name}}"
              data-choice-rank="{{rank_score}}"
            >
              <span class="font-bold text-green-600"></span>: points
            </li>
          </ul>

          <script src="/javascript/close-poll.js"></script>

          <canvas
            class="mx-auto mt-14 w-3/4 md:w-full md:max-w-lg"
            id="chart"
          ></canvas>
        </article>
      </MotionWrapper>
    </Layout>
  );
};

export default OpenPolls;
