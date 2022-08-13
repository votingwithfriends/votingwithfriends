import { User, Choices, Vote, Poll } from "../models";
import { AuthenticationError } from "apollo-server-express";

export const resolvers = {
  Query: {
    users: async () => {
      return User.find().select("-__v -password");
    },
    user: async (_: any, { _id }: any) => {
      return User.findOne({ _id }).select("-__v -password");
    },
    // get all choices
    choices: async () => {
      return await Choices.find().select("-__v").populate("poll");
    },
    // get all polls
    polls: async (_: any, args: any) => {
      return await Poll.find().select("-__v").populate("choices");
    },
    poll: async (_: any, { _id }: any) => {
      return Poll.findOne({ _id }).select("-__v").populate("choices");
    },
  },

  Mutation: {
    addUser: async (_: any, args: any) => {
      const user = await User.create(args);
      return user;
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

      return user;
    },
    // post new choice
    addChoice: async (_: any, args: any) => {
      const choice = await Choices.create(args);
      return choice;
    },
    // need some help on choice rank
    // rankedChoice: async (_: any, args: any) => {
    //   const rankedChoice = await Choices.([]);
    //   return rankedChoice;
    // },

    updateChoice: async (_: any, args: any) => {
      return await Choices.findByIdAndUpdate(
        args._id,
        { $push: { choice_name: args.choice_name } },
        { new: true, runValidators: true }
      );
    },
    // create new poll
    addPoll: async (_: any, args: any) => {
      const poll = await Poll.create(args);
      return poll;
    },
    // update is_open for single poll
    updatePoll: async (_: any, { _id, is_open }: any) => {
      return await Poll.findOneAndUpdate(
        _id,
        { $set: { is_open } },
        { new: true }
      );
    },
    deletePoll: async (_: any, { _id }: any) => {
      return await Poll.findOneAndDelete({ _id });
    },
  },
};
