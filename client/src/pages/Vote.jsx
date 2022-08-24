import Layout from "../components/layout/Layout";
import MotionWrapper from "../components/layout/MotionWrapper";

const Vote = () => {
  return (
    <Layout>
      <MotionWrapper>
        <article>
          <p class="mb-4 font-bold md:text-2xl">
            Please select your top three options below, leaving the rest blank.
          </p>
          <h3 class="mb-8 text-xl font-bold text-blue-500 md:text-2xl"></h3>
          <form id="vote-form">
            <div class="flex items-center justify-between">
              <ul
                id="choice-list"
                class="flex flex-col gap-y-4"
                data-poll_id="{{id}}"
              >
                <li
                  class="flex items-center justify-between rounded px-4 py-2"
                  data-choice="{{choice_name}}"
                  data-choice_id="{{id}}"
                >
                  <label for="choice" class="font-bold"></label>
                  <select name="choice" class="ml-6 p-2">
                    <option value="0">None</option>
                    <option class="text-green-500" value="6">
                      1st Place
                    </option>
                    <option class="text-yellow-500" value="3">
                      2nd Place
                    </option>
                    <option class="text-red-500" value="2">
                      3rd Place
                    </option>
                  </select>
                </li>
              </ul>
            </div>
            <button
              type="submit"
              class="mt-8 rounded bg-green-500 p-4 text-white hover:bg-green-400"
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
