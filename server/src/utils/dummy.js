const users = {
  data: {
    users: [
      {
        _id: "62ffb6cbcc62fc9493e3c27e",
        username: "josue",
        email: "josue@email.com",
      },
      {
        _id: "62ffbbbd5457d4c1417fdb4a",
        username: "jeff",
        email: "jeff@email.com",
      },
      {
        _id: "6300feb3459928a7c9d014fa",
        username: "carlos",
        email: "carlos@email.com",
      },
      {
        _id: "6300febf459928a7c9d014fc",
        username: "Todd",
        email: "Todd@email.com",
      },
      {
        _id: "6300fecb459928a7c9d01500",
        username: "Sam",
        email: "Sam@email.com",
      },
      {
        _id: "6300fed2459928a7c9d01502",
        username: "Jake",
        email: "Jake@email.com",
      },
    ],
  },
};

const josue = {
  data: {
    user: {
      _id: "62ffb6cbcc62fc9493e3c27e",
      username: "josue",
      email: "josue@email.com",
    },
  },
};

// user added in as an example
const pizzaPoll = {
  data: {
    poll: {
      _id: "62ffbd966ca1415efef07804",
      title: "pizza poll",
      is_open: true,
      user: {
        _id: "62ffb6cbcc62fc9493e3c27e",
        username: "josue",
        email: "josue@email.com",
      },
      choices: [
        {
          _id: "6300ffb5459928a7c9d01507",
          choice_name: "Pizza Hut",
        },
        {
          _id: "6300ffbb459928a7c9d01509",
          choice_name: "Papa Johns",
        },
        {
          _id: "6300ffc1459928a7c9d0150b",
          choice_name: "Dominos",
        },
        {
          _id: "6300ffca459928a7c9d0150d",
          choice_name: "Little Caesars",
        },
      ],
      votes: [
        {
          _id: "6300ffec459928a7c9d01510",
          rank_value: 3,
          user_id: "62ffb6cbcc62fc9493e3c27e",
          choice_id: "6300ffb5459928a7c9d01507",
        },
        {
          _id: "6300ffff459928a7c9d01512",
          rank_value: 2,
          user_id: "62ffb6cbcc62fc9493e3c27e",
          choice_id: "6300ffbb459928a7c9d01509",
        },
        {
          _id: "6301000e459928a7c9d01514",
          rank_value: 1,
          user_id: "62ffb6cbcc62fc9493e3c27e",
          choice_id: "6300ffc1459928a7c9d0150b",
        },
      ],
      comments: [
        {
          _id: "630100ce210f8ce7cd530091",
          comment_body: "Pizza is delicious",
          username: "josue",
          createdAt: "1661010126718",
        },
      ],
    },
  },
};

const polls = {
  data: {
    polls: [
      {
        _id: "62ffbd966ca1415efef07804",
        title: "pizza poll",
        is_open: true,
      },
      {
        _id: "630101a0210f8ce7cd530095",
        title: "sandwich poll",
        is_open: true,
      },
      {
        _id: "630101a6210f8ce7cd530097",
        title: "movie poll",
        is_open: true,
      },
      {
        _id: "630101ae210f8ce7cd530099",
        title: "theme park poll",
        is_open: true,
      },
    ],
  },
};
