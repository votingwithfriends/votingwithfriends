import { User, Vote, Poll } from "../models";
import { AuthenticationError } from "apollo-server-express";

export const resolvers = {
  Query: {
    users: async () => {
      return User.find().select("-__v -password");
    },
    user: async (_: any, { _id }: any) => {
      return User.findOne({ _id }).select("-__v -password");
    },
    // get all polls
    polls: async (_: any, args: any) => {
      return await Poll.find().select("-__v").populate("choices");
    },
    poll: async (_: any, { _id }: any) => {
      const poll = await Poll.findOne({ _id })
        .select("-__v")
        .populate("choices");
      if (!poll) {
        throw new AuthenticationError("No poll found with this ID");
      }
      return poll;
    },
    votes: async (_: any, args: any) => {
      return await Vote.find().select("-__v").populate("poll");
    },
  },

  Mutation: {
    addUser: async (_: any, args: any) => {
      const user = await User.create(args);
      // const token = signToken(user);
      // return { token, user };
    },
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
      // const token = signToken(user);
      // return { token, user };
    },
    // post new choice

    addChoice: async (_: any, { _id, choice_name }: any) => {
      return await Poll.findOneAndUpdate(
        { _id: _id },

        { $push: { choices: { choice_name } } },
        { new: true }
      );
    },
    // need some help on choice rank
    // rankedChoice: async (_: any, args: any) => {
    //   const rankedChoice = await Choices.([]);
    //   return rankedChoice;
    // },

    updateChoice: async (_: any, { _id, choice_id, choice_name }: any) => {
      // get poll to update choice on
      const poll = await Poll.findById(_id);
      // check that poll exists with given id
      if (!poll) {
        throw new AuthenticationError("No poll found with this ID");
      }
      // create array of current choice ids
      const choiceIdArray = poll.choices.map(
        ({ choice_id: choice_id }: any) => ({
          choice_id: choice_id,
        })
      );
      // check to see if  given choice_id exists in array
      let result = choiceIdArray.some(
        (choice: any) => choice.choice_id.toHexString() === choice_id
      );
      // throw error if choice_id doesn't exist
      if (!result) {
        throw new AuthenticationError("No choice found with this ID");
      }

      const choice = await Poll.findByIdAndUpdate(
        { _id: _id },

        {
          $pull: { choices: { choice_id: choice_id } },
        },
        { new: true, runValidators: true }
      );

      return await Poll.findOneAndUpdate(
        { _id: _id },

        {
          $push: { choices: { choice_name: choice_name } },
        },
        { new: true }
      );
    },

    // delete choice
    deleteChoice: async (_: any, { _id, choice_id }: any) => {
      return await Poll.findByIdAndUpdate(
        { _id: _id },
        { $pull: { choices: { choice_id: choice_id } } },
        { new: true }
      );
    },
    addComment: async (_: any, { _id, commentBody, username }: any) => {
      return await Poll.findOneAndUpdate(
        { _id: _id },

        { $push: { comments: { commentBody, username } } },
        { new: true }
      );
    },
    updateComment: async (_: any, { _id, comment_id, commentBody }: any) => {
      // get poll to update choice on
      const poll = await Poll.findById(_id);
      // check that poll exists with given id
      if (!poll) {
        throw new AuthenticationError("No poll found with this ID");
      }
      // create array of current choice ids
      const commentIdArray = poll.comments.map(
        ({ comment_id: comment_id }: any) => ({
          comment_id: comment_id,
        })
      );
      // check to see if  given choice_id exists in array
      let result = commentIdArray.some(
        (comment: any) => comment.comment_id.toHexString() === comment_id
      );
      // throw error if choice_id doesn't exist
      if (!result) {
        throw new AuthenticationError("No choice found with this ID");
      }

      const comment = await Poll.findByIdAndUpdate(
        { _id: _id },

        {
          $pull: { comments: { comment_id: comment_id } },
        },
        { new: true, runValidators: true }
      );

      return await Poll.findOneAndUpdate(
        { _id: _id },

        {
          $push: { comments: { commentBody: commentBody } },
        },
        { new: true }
      );
    },
    deleteComment: async (_: any, { _id, comment_id }: any) => {
      return await Poll.findByIdAndUpdate(
        { _id: _id },
        { $pull: { comments: { comment_id: comment_id } } },
        { new: true }
      );
    },
    // create new poll
    addPoll: async (_: any, args: any) => {
      const poll = await Poll.create(args);
      return poll;
    },
    // update is_open for single poll
    updatePoll: async (_: any, { _id, is_open }: any) => {
      const poll = await Poll.findOneAndUpdate(
        { _id: _id },
        { $set: { is_open } },
        { new: true }
      );
      if (!poll) {
        throw new AuthenticationError("No poll found with this ID");
      }
      return poll;
    },
    deletePoll: async (_: any, { _id }: any) => {
      const poll = await Poll.findOneAndDelete({ _id });
      if (!poll) {
        throw new AuthenticationError("No poll found with this ID");
      }
      return poll;
    },

    // create new vote
    addVote: async (_: any, args: any) => {
      const vote = await Vote.create(args);
      return vote;
    },
  },
};
