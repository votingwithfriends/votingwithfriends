import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Poll {
    _id: ID
    title: String
    is_open: Boolean
    user: User
    choices: [Choices]
    comments: [Comment]
  }

  type Choices {
    _id: ID
    choice_name: String
    choice_id: ID!
  }

  type Comment {
    _id: ID
    commentBody: String
    username: String
    createdAt: String
    comment_id: ID
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
    polls: [Poll]
    poll(_id: ID!): Poll
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
    addChoice(_id: ID!, choice_name: String!): Poll
    rankedChoice(user_id: ID!): Choices
    updateChoice(_id: ID!, choice_id: ID!, choice_name: String!): Poll
    deleteChoice(_id: ID!, choice_id: ID!): Poll
    addPoll(title: String!, is_open: Boolean): Poll
    updatePoll(_id: ID!, is_open: Boolean): Poll
    deletePoll(_id: ID!): Poll
    addComment(_id: ID!, commentBody: String, username: String): Poll
    updateComment(_id: ID!, comment_id: ID!, commentBody: String!): Poll
    deleteComment(_id: ID!, comment_id: ID!): Poll
  }
`;
