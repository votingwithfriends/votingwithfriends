import Layout from "../components/layout/Layout";
import MotionWrapper from "../components/layout/MotionWrapper";
import { useMutation } from "@apollo/client";
import { ADD_POLL } from "../utils/mutations";
import { useState, useEffect } from "react";
import { ADD_CHOICE } from "../utils/mutations";
import { Link } from "react-router-dom";
//NOTES
// Large flash of white when loading this page. NOT on refresh, only when Nav. from another page happens 8/10 times. - Fixed by proper Linking without Href.
// In my opinion the Next Step button is too large.
//Current Link in the NavBar so we can navigate to page. We can move or place the link later.

const CreateNewPoll = () => {
  const [addPoll, { error }] = useMutation(ADD_POLL);
  const [pollId, setPollId] = useState("");
  const [addChoice, { badChoice }] = useMutation(ADD_CHOICE);
  const [choiceFormState, setChoiceFormState] = useState(false);
  const [pollSubmitBtnState, setPollSubmitBtnState] = useState(false);
  const [choiceArr, setChoiceArr] = useState([]);
  const [formState, setFormState] = useState({
    title: "",
  });

  const [choiceState, setChoiceState] = useState({
    choice_name: "",
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
      ...choiceState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addPoll({
        variables: { ...formState },
      });
      setPollId(data.addPoll._id);
    } catch (err) {
      console.log(err);
    }
    setChoiceFormState(true);
    setPollSubmitBtnState(true);
  };

  const handleChoiceSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addChoice({
        variables: { ...choiceState, poll_id: pollId },
      });
      if (choiceArr.length < 1) {
        setChoiceArr(data.addChoice.choices);
      } else {
        setChoiceArr(data.addChoice.choices, ...choiceArr);
      }
      setChoiceState({ choice_name: "" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout>
      <MotionWrapper>
        <article
          className="mx-auto mt-20 flex w-full max-w-screen-md flex-col gap-y-10 pb-10"
          data-poll-id=""
          id="poll-parent"
        >
          <h2 className="text-xl font-bold md:text-3xl">Create a new poll</h2>
          <form onSubmit={handleFormSubmit}>
            <label className="flex flex-col">
              Title:
              <input
                className="w-full max-w-sm rounded border border-gray-500 p-2 text-gray-900"
                type="text"
                name="title"
                id="title"
                value={formState.title}
                placeholder="Poll Title"
                onChange={handleChange}
              />
            </label>
            <p
              id="error"
              className="h-3 text-sm font-bold text-red-400 opacity-0 transition-opacity duration-300 ease-in-out"
            ></p>
            <div className="w-60 ">
              <button
                type="submit"
                disabled={pollSubmitBtnState}
                className={`w-full rounded py-4 font-bold text-white ${
                  formState.title.length > 0
                    ? "bg-blue-500 hover:bg-blue-600 dark:bg-cyan-600 dark:hover:bg-cyan-500"
                    : "cursor-not-allowed bg-gray-500"
                }`}
              >
                Next Step
              </button>
            </div>
          </form>
          <div className="h-[1px] w-full bg-blue-500 dark:bg-cyan-400"></div>
          {choiceFormState && (
            <form onSubmit={handleChoiceSubmit}>
              <h2 className="mb-4 text-xl font-bold">Enter your choices</h2>
              <div className="grid grid-cols-[1fr_auto] overflow-hidden rounded border-2 border-blue-500 dark:border-cyan-600">
                <input
                  id="choice_name"
                  className="p-3"
                  type="text"
                  name="choice_name"
                  value={choiceState.choice_name}
                  placeholder="Enter choice name"
                  onChange={handleChoiceChange}
                />
                <button
                  className="bg-blue-500 p-3 text-white dark:bg-cyan-500"
                  type="submit"
                >
                  Add choice
                </button>
              </div>
              <p className="text-sm text-gray-600">*3 choices minimum</p>
            </form>
          )}

          <ul className="grid grid-cols-2 gap-8">
            {choiceArr.map((choice, index) => (
              <li
                className="rounded bg-blue-500 p-4 text-white dark:bg-cyan-500"
                key={index}
              >
                {choice.choice_name}
              </li>
            ))}
          </ul>
          {choiceArr.length > 2 && (
            <Link
              to="/dashboard"
              className="w-full rounded bg-blue-800 p-4 text-center text-white transition-all ease-in-out hover:bg-blue-700 dark:bg-cyan-800 dark:hover:bg-cyan-700"
            >
              Finish creating poll
            </Link>
          )}
        </article>
      </MotionWrapper>
    </Layout>
  );
};

export default CreateNewPoll;
