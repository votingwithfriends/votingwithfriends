import { User, Poll } from "../models";
import { AuthenticationError } from "apollo-server-express";
import { signToken } from "../utils/auth";

export const resolvers = {
  Query: {
    // get all users
    users: async () => {
      return User.find().select("-__v -password");
    },

    // get a single user
    user: async (_: any, { _id }: any) => {
      return User.findOne({ _id }).select("-__v -password");
    },

    // get all polls
    polls: async (_: any, args: any) => {
      return await Poll.find().select("-__v").populate("choices");
    },

    // get a single poll
    poll: async (_: any, { _id }: any) => {
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
    addUser: async (_: any, args: any) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    // login
    login: async (
      _: any,
      { email, password }: { email: String; password: string }
    ) => {
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

    // create new poll
    addPoll: async (_: any, args: any) => {
      try {
        const poll = await Poll.create(args);

        return poll;
      } catch (err) {
        return console.log(err);
      }
    },

    // update is_open for single poll
    updatePoll: async (_: any, { poll_id, is_open }: any) => {
      const poll = await Poll.findOneAndUpdate(
        { _id: poll_id },
        { $set: { is_open } },
        { new: true }
      );
      if (!poll) {
        throw new AuthenticationError("No poll found with this ID");
      }
      return poll;
    },

    // delete a poll
    deletePoll: async (_: any, { poll_id }: any) => {
      const poll = await Poll.findOneAndDelete({ poll_id });
      if (!poll) {
        throw new AuthenticationError("No poll found with this ID");
      }
      return poll;
    },

    // post new choice
    addChoice: async (_: any, { _id, choice_name }: any, context: any) => {
      try {
        const choice = await Poll.findByIdAndUpdate(
          { _id },
          { $push: { choices: { choice_name } } },
          { new: true }
        );

        return choice;
      } catch (err) {
        return console.log(err);
      }
    },

    // update a choice for a poll
    updateChoice: async (_: any, { poll_id, choice_id, choice_name }: any) => {
      // get poll to update choice on
      const poll = await Poll.findById(poll_id);
      // check that poll exists with given id
      if (!poll) {
        throw new AuthenticationError("No poll found with this ID");
      }
      // create array of current choice ids
      const choiceIdArray = poll.choices.map(({ _id: choice_id }: any) => ({
        _id: choice_id,
      }));
      // check to see if  given choice_id exists in array
      let result = choiceIdArray.some(
        (choice: any) => choice.choice_id.toHexString() === choice_id
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
    },

    // delete choice
    deleteChoice: async (_: any, { poll_id, choice_id }: any) => {
      return await Poll.findByIdAndUpdate(
        { _id: poll_id },
        { $pull: { choices: { _id: choice_id } } },
        { new: true }
      );
    },

    // post new vote
    addVote: async (
      _: any,
      { _id, rank_value, user_id, choice_id }: any,
      context: any
    ) => {
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

    // add a comment to a poll
    addComment: async (_: any, { poll_id, comment_body, username }: any) => {
      return await Poll.findOneAndUpdate(
        { _id: poll_id },

        { $push: { comments: { comment_body, username } } },
        { new: true }
      );
    },

    // update a comment on a poll
    updateComment: async (
      _: any,
      { poll_id, comment_id, comment_body }: any
    ) => {
      // get poll to update choice on
      const poll = await Poll.findById(poll_id);
      // check that poll exists with given id
      if (!poll) {
        throw new AuthenticationError("No poll found with this ID");
      }
      // create array of current choice ids
      const commentIdArray = poll.comments.map(({ _id: comment_id }: any) => ({
        _id: comment_id,
      }));
      // check to see if  given choice_id exists in array
      let result = commentIdArray.some(
        (comment: any) => comment.comment_id.toHexString() === comment_id
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
          $push: { comments: { comment_body: comment_body } },
        },
        { new: true }
      );
    },

    // delete a comment on a poll
    deleteComment: async (_: any, { poll_id, comment_id }: any) => {
      return await Poll.findByIdAndUpdate(
        { _id: poll_id },
        { $pull: { comments: { _id: comment_id } } },
        { new: true }
      );
    },
  },
};
