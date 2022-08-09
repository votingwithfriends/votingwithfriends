import { User } from "../models";
import { AuthenticationError } from "apollo-server-express";

export const resolvers = {
  Query: {
    users: async () => {
      return User.find().select("-__v -password");
    },
    user: async (_: any, { _id }: any) => {
      return User.findOne({ _id }).select("-__v -password");
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
  },
};
