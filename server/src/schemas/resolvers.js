const { User, Poll } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (_, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    // get all users

    users: async () => {
      return User.find().select("-__v -password -token");
    },

    // get a single user
    user: async (_, { _id }) => {
      const user = User.findOne({ _id }).select("-__v -password");

      if (!user) {
        throw new AuthenticationError("No user found with this id");
      }

      return user;
    },

    // get all polls
    polls: async (_, args) => {
      return await Poll.find().select("-__v").populate("choices");
    },

    // get a single poll
    poll: async (_, { _id }) => {
      const poll = await Poll.findOne({ _id })
        .select("-__v")
        .populate("choices");
      if (!poll) {
        throw new AuthenticationError("No poll found with this ID");
      }

      return poll;
    },
  },

  Mutation: {
    // create new user
    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    // login
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      // Check password
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },

    // post new choice
    addChoice: async (_, { poll_id, choice_name }, context) => {
      if (context.user) {
        const poll = await Poll.findOne({ poll_id });
        if (!poll) {
          throw new AuthenticationError("No poll found with this ID");
        }
        if (poll.user.valueOf() === context.user._id) {
          return await Poll.findByIdAndUpdate(
            { _id: poll_id },
            { $push: { choices: { choice_name } } },
            { new: true }
          );
        }
      }
      throw new AuthenticationError("Only poll createer can create a choice");
    },

    // update a choice for a poll
    updateChoice: async (_, { poll_id, choice_id, choice_name }, context) => {
      // get poll to update choice on
      if (context.user) {
        const poll = await Poll.findOne({ _id: poll_id });
        if (!poll) {
          throw new AuthenticationError("No poll found with this ID");
        }

        if (poll.user.valueOf() === context.user._id) {
          // create array of current choice ids
          const choiceIdArray = poll.choices.map(({ _id: choice_id }) => ({
            _id: choice_id,
          }));
          // check to see if  given choice_id exists in array
          let result = choiceIdArray.some(
            (choice) => choice._id.toHexString() === choice_id
          );
          // throw error if choice_id doesn't exist
          if (!result) {
            throw new AuthenticationError("No choice found with this ID");
          }

          const choice = await Poll.findByIdAndUpdate(
            { _id: poll_id },

            {
              $pull: { choices: { _id: choice_id } },
            },
            { new: true, runValidators: true }
          );

          return await Poll.findOneAndUpdate(
            { _id: poll_id },

            {
              $push: { choices: { choice_name: choice_name } },
            },
            { new: true }
          );
        }
        throw new AuthenticationError("Only poll creater can update choices");
      }
      throw new AuthenticationError("must be logged in to update choices");
    },

    // delete choice
    deleteChoice: async (_, { poll_id, choice_id }, context) => {
      if (context.user) {
        const poll = await Poll.findOne({ _id: poll_id });
        if (!poll) {
          throw new AuthenticationError("no poll with this id");
        }
        if (poll.user.valueOf() === context.user._id) {
          return await Poll.findByIdAndUpdate(
            { _id: poll_id },
            { $pull: { choices: { _id: choice_id } } },
            { new: true }
          );
        }
        throw new AuthenticationError("Only poll creator may delete comments");
      }
      throw new AuthenticationError("must be logged in to delete comment");
    },

    addComment: async (_, { poll_id, comment_body }, context) => {
      if (context.user) {
        return await Poll.findOneAndUpdate(
          { _id: poll_id },
          {
            $push: {
              comments: {
                comment_body: comment_body,
                username: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError("Must be logged in to add comment");
    },
    // post new vote
    addVote: async (_, { _id, rank_value, user_id, choice_id }, context) => {
      try {
        const vote = await Poll.findByIdAndUpdate(
          { _id },
          { $push: { votes: { rank_value, user_id, choice_id } } },
          { new: true }
        );

        return vote;
      } catch (err) {
        return console.log(err);
      }
    },

    // update a comment on a poll
    updateComment: async (
      _,
      { poll_id, comment_id, comment_body },
      context
    ) => {
      if (context.user) {
        // get poll to update choice on
        const poll = await Poll.findById(poll_id);
        // check that poll exists with given id
        if (!poll) {
          throw new AuthenticationError("No poll found with this ID");
        }
        // create array of current choice ids
        const commentIdArray = poll.comments.map(({ _id: comment_id }) => ({
          _id: comment_id,
        }));
        // check to see if  given choice_id exists in array
        let result = commentIdArray.some(
          (comment) => comment._id.toHexString() === comment_id
        );
        // throw error if choice_id doesn't exist
        if (!result) {
          throw new AuthenticationError("No choice found with this ID");
        }

        const comment = await Poll.findByIdAndUpdate(
          { _id: poll_id },

          {
            $pull: { comments: { _id: comment_id } },
          },
          { new: true, runValidators: true }
        );

        return await Poll.findOneAndUpdate(
          { _id: poll_id },

          {
            $push: {
              comments: {
                comment_body: comment_body,
                username: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError("Must be logged in to update comment");
    },
    deleteComment: async (_, { poll_id, comment_id }, context) => {
      if (context.user) {
        const poll = await Poll.findOne({ _id: poll_id });
        if (!poll) {
          throw new AuthenticationError("no poll with this id");
        }
        if (poll.user.valueOf() === context.user._id) {
          return await Poll.findByIdAndUpdate(
            { _id: poll_id },
            { $pull: { comments: { _id: comment_id } } },
            { new: true }
          );
        }
        throw new AuthenticationError("Only poll creator may delete comments");
      }
      throw new AuthenticationError("must be logged in to delete comment");
    },
    // create new poll
    addPoll: async (_, args, context) => {
      console.log(context.user.username);
      if (context.user) {
        return await Poll.create({
          ...args,
          user: { _id: context.user._id, username: context.user.username },
        });
      }
      throw new AuthenticationError("Must be logged in to create a poll");
    },
    // update is_open for single poll
    updatePoll: async (_, { poll_id, is_open }, context) => {
      if (context.user) {
        const poll = await Poll.findOne({ _id: poll_id });
        if (!poll) {
          throw new AuthenticationError("No poll found with this ID");
        }
        if (poll.user.valueOf() === context.user._id) {
          return await Poll.findOneAndUpdate(
            { _id: poll_id },
            { $set: { is_open } },
            { new: true }
          );
        }
        throw new AuthenticationError(
          "You are not authorized to update this poll"
        );
      }
      throw new AuthenticationError("You must be logged into update poll");
    },
    deletePoll: async (_, { poll_id }, context) => {
      if (context.user) {
        const poll = await Poll.findOne({ _id: poll_id });
        if (!poll) {
          throw new AuthenticationError("No poll found with this ID");
        }
        if (poll.user.valueOf() === context.user._id) {
          return await Poll.findOneAndDelete({ _id: poll_id });
        }
        throw new AuthenticationError("Not authorized to delete this poll");
      }
      throw new AuthenticationError("You must be logged in to delete a poll");
    },
  },
};

module.exports = resolvers;
