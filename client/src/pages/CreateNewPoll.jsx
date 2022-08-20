import Layout from "../components/layout/Layout";
import MotionWrapper from "../components/layout/MotionWrapper";

//NOTES
// Large flash of white when loading this page. NOT on refresh, only when Nav. from another page happens 8/10 times. - Fixed by proper Linking without Href.
// In my opinion the Next Step button is too large.
//Current Link in the NavBar so we can navigate to page. We can move or place the link later.

const CreateNewPoll = () => {
  return (
    <Layout>
      <MotionWrapper>
        <article
          className="mx-auto flex w-full max-w-screen-md flex-col gap-y-10"
          data-poll-id=""
          id="poll-parent"
        >
          {/*Create New Poll Header */}
          <h2 className="text-xl font-bold md:text-3xl">Create a new poll</h2>
          {/*Title Header */}
          <form>
            <label className="flex flex-col">
              Title:
              <input
                className="w-full max-w-sm rounded border border-gray-500 p-2 text-gray-900"
                type="text"
                id="pollTitle"
              />
            </label>
            <p
              id="error"
              className="h-3 text-sm font-bold text-red-400 opacity-0 transition-opacity duration-300 ease-in-out"
            ></p>
            <div className="w-60 ">
              {/*Next Step Button */}
              <button className="w-full rounded-full bg-blue-500 py-4 font-bold text-white transition duration-200 hover:bg-blue-700">
                Next Step
              </button>
            </div>
          </form>
          {/*Bottom Border */}
          <div className="h-[1px] w-full bg-gray-600"></div>
          {/*<form className="hidden" id="choices">
            <h2 className="mb-4 text-xl font-bold">Enter your choices</h2>

            {/*<div className="grid grid-cols-[1fr_auto] overflow-hidden rounded border-2 border-green-400">
              <input
                id="choice-name"
                className="p-3"
                type="text"
                placeholder="Enter choice name"
                required
              />
              <button className="bg-green-500 p-3 text-white" type="submit">
                Add choice
              </button>
            </div>
  
            <p className="text-sm text-gray-600">*3 choices minimum</p>
          </form>
          <button
            id="finish-btn"
            className="hidden w-full rounded bg-gray-400 p-2 text-white transition-all ease-in-out hover:bg-green-400"
          >
            Finish creating poll
          </button>
          <ul
            className="flex grid-cols-2 flex-col gap-4 md:grid"
            id="choiceList"
          ></ul>*/}
        </article>
      </MotionWrapper>
    </Layout>
  );
};

export default CreateNewPoll;