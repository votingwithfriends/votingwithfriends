import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Choices {
    _id: ID
    choice_name: String
    poll: Poll
  }

  type Poll {
    _id: ID
    title: String
    is_open: Boolean
    user: User
    choices: [Choices]
  }

  type Vote {
    _id: ID
    user: User
    poll: Poll
    choice: Choices
    rank_value: Int
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    choices: [Choices]
    polls: [Poll]
    poll(_id: ID!): Poll
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
    addChoice(choice_name: String!, poll_id: ID!, user_id: ID!): Choices
    rankedChoice(user_id: ID!): Choices
    updateChoice(_id: ID!, choice_name: String!): Choices
    addPoll(title: String!, is_open: Boolean): Poll
    updatePoll(_id: ID!, is_open: Boolean): Poll
    deletePoll(_id: ID!): Poll
  }
`;
