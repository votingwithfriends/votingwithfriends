import Layout from "../components/layout/Layout";
import MotionWrapper from "../components/layout/MotionWrapper";
import { useMutation } from "@apollo/client";
import { ADD_POLL } from "../utils/mutations";
import { useState } from "react";
import { ADD_CHOICE } from "../utils/mutations"
//NOTES
// Large flash of white when loading this page. NOT on refresh, only when Nav. from another page happens 8/10 times. - Fixed by proper Linking without Href.
// In my opinion the Next Step button is too large.
//Current Link in the NavBar so we can navigate to page. We can move or place the link later.

const CreateNewPoll = () => {

  const [addPoll, { error }] = useMutation(ADD_POLL);
  const [addChoice, { badChoice }] = useMutation(ADD_CHOICE)
   const [pollId, setPollID] = useState ("")
  const [formState, setFormState] = useState({
    id_: "",
    title: "",
  });
  const [choiceState, setChoiceState] = useState({
    choice: "",
    id_: "",
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleChoiceChange = (event) => {
    const { name, value } = event.target;
    setChoiceState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
   
    console.log(formState);
    event.preventDefault();
    try {
      const { data } = await addPoll({
        variables: { ...formState, pollId },
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChoiceSubmit = async (event) => {
   
    console.log(choiceState);
    event.preventDefault();
    try {
      const { data } = await addChoice({
        variables: { ...choiceState },
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
          <div class="w-full h-[1px] bg-blue-500"></div>
   <form onSubmit={handleChoiceSubmit}>
    <h2 class="font-bold text-xl mb-4">Enter your choices</h2>
    <div
      class="grid grid-cols-[1fr_auto] border-2 border-blue-500 rounded overflow-hidden"
    >
      <input
        id="choice-name"
        class="p-3"
        type="text"
        name="choice"
        value={choiceState.choice}
        placeholder="Enter choice name"
        onChange={handleChoiceChange} 
      />
      <button class="p-3 bg-blue-500 text-white" id="choice_name" type="submit">Add choice</button>
    </div>
    <p class="text-sm text-gray-600">*3 choices minimum</p>
  </form>
  <button
    id="finish-btn"
    class="w-full hidden p-2 transition-all ease-in-out bg-gray-400 hover:bg-green-400 text-white rounded"
  >Finish creating poll</button>
  <ul class="flex flex-col md:grid grid-cols-2 gap-4" id="choice_name">

  </ul>
        </article>
      </MotionWrapper>
    </Layout>
  );
};

export default CreateNewPoll;
