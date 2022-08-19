import { User, Poll } from "../models";
import { AuthenticationError } from "apollo-server-express";
import { signToken } from "../utils/auth";
import { argsToArgsConfig } from "graphql/type/definition";
import { ConnectionStates } from "mongoose";
import { ValidationContext } from "graphql";

export const resolvers = {
  Query: {
    me: async (_: any, args: any, context: any) => {
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
    user: async (_: any, { _id }: any) => {
      const user = User.findOne({ _id }).select("-__v -password");

      if (!user) {
        throw new AuthenticationError("No user found with this id");
      }

      return user;
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

    addComment: async (
      _: any,
      { poll_id, comment_body }: any,
      context: any
    ) => {
      if (context.user) {
        return await Poll.findOneAndUpdate({ _id: poll_id });
      }
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

    // update a comment on a poll
    updateComment: async (
      _: any,
      { poll_id, comment_id, comment_body }: any,
      context: any
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
    deleteComment: async (
      _: any,
      { poll_id, comment_id }: any,
      context: any
    ) => {
      if (context.user) {
        const poll = await Poll.findOne({ poll_id });
        if (!poll) {
          throw new AuthenticationError(
            "You must be logged in to delete this comment"
          );
        }

        return await Poll.findByIdAndUpdate(
          { _id: poll_id },
          { $pull: { comments: { _id: comment_id } } },
          { new: true }
        );
      }
    },
    // create new poll
    addPoll: async (_: any, args: any, context: any) => {
      if (context.user) {
        const poll = await Poll.create({
          ...args,
          user: { _id: context.user._id, username: context.user.username },
        });
        return poll;
      }
      throw new AuthenticationError("Must be logged in to create a poll");
    },
    // update is_open for single poll
    updatePoll: async (_: any, { poll_id, is_open }: any, context: any) => {
      if (context.user) {
        const poll = await Poll.findOne({ poll_id });
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
    deletePoll: async (_: any, { poll_id }: any, context: any) => {
      if (context.user) {
        const poll = await Poll.findOne({ poll_id });
        if (!poll) {
          throw new AuthenticationError("No poll found with this ID");
        }
        if (poll.user.valueOf() === context.user._id) {
          return await Poll.findOneAndDelete({ poll_id });
        }
        throw new AuthenticationError("Not authorized to delete this poll");
      }
      throw new AuthenticationError("You must be logged in to delete a poll");
    },
  },
};
