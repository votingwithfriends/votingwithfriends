const poll_votes = {
  data: {
    poll: {
      _id: "123pizza_poll123",
      title: "pizza_poll",
      is_open: true,
      votes: [
        {
          _id: "a",
          rank_value: 1,
          user_id: "josue",
          choice_id: "alpha",
        },
        {
          _id: "b",
          rank_value: 2,
          user_id: "josue",
          choice_id: "beta",
        },
        {
          _id: "c",
          rank_value: 3,
          user_id: "josue",
          choice_id: "gamma",
        },
        {
          _id: "d",
          rank_value: 1,
          user_id: "carlos",
          choice_id: "gamma",
        },
        {
          _id: "e",
          rank_value: 2,
          user_id: "carlos",
          choice_id: "alpha",
        },
        {
          _id: "f",
          rank_value: 3,
          user_id: "carlos",
          choice_id: "beta",
        },
        {
          _id: "g",
          rank_value: 1,
          user_id: "sam",
          choice_id: "eta",
        },
        {
          _id: "h",
          rank_value: 2,
          user_id: "sam",
          choice_id: "alpha",
        },
        {
          _id: "i",
          rank_value: 3,
          user_id: "sam",
          choice_id: "beta",
        },
        {
          _id: "g",
          rank_value: 1,
          user_id: "todd",
          choice_id: "gamma",
        },
        {
          _id: "h",
          rank_value: 2,
          user_id: "todd",
          choice_id: "eta",
        },
        {
          _id: "i",
          rank_value: 3,
          user_id: "todd",
          choice_id: "beta",
        },
      ],
    },
  },
};

function hellow() {
  // create a unique array of choices
  const vote_objs = poll_votes.data.poll.votes;
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

export const voteAlgorithm = hellow();

//     (choice) => {
//   vote_objs.filter((vote) => vote.choice_id === choice);
// });
