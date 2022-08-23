import Layout from "../components/layout/Layout";
import MotionWrapper from "../components/layout/MotionWrapper";
import { useMutation } from "@apollo/client";
import { ADD_POLL } from "../utils/mutations";
import { useState } from "react";
//NOTES
// Large flash of white when loading this page. NOT on refresh, only when Nav. from another page happens 8/10 times. - Fixed by proper Linking without Href.
// In my opinion the Next Step button is too large.
//Current Link in the NavBar so we can navigate to page. We can move or place the link later.

const CreateNewPoll = () => {

  const [addPoll, { error }] = useMutation(ADD_POLL);
  const [formState, setFormState] = useState({
    
    title: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
   
    console.log(formState);
    event.preventDefault();
    try {
      const { data } = await addPoll({
        variables: { ...formState },
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

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
          <form onSubmit={handleFormSubmit}>
            <label className="flex flex-col">
              Title:
              <input
                className="w-full max-w-sm rounded border border-gray-500 p-2 text-gray-900"
                type="text"
                name="title"
                id="title"
                value={formState.title}
                placeholder= "Poll Title"
                onChange={handleChange}
              />
            </label>
            <p
              id="error"
              className="h-3 text-sm font-bold text-red-400 opacity-0 transition-opacity duration-300 ease-in-out"
            ></p>
            <div className="w-60 ">
              {/*Next Step Button */}
              <button type="submit" className="dark: dark: dark: w-full rounded-full bg-blue-500 py-4 font-bold text-white hover:bg-blue-600 dark:bg-cyan-600 dark:hover:bg-cyan-500">
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
