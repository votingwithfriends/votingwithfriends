import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    token: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Poll {
    _id: ID
    title: String
    is_open: Boolean
    user: User
    choices: [Choices]
    votes: [Vote]
    comments: [Comment]
  }

  type Choices {
    _id: ID
    choice_name: String
  }

  type Comment {
    _id: ID
    comment_body: String
    username: String
    createdAt: String
  }

  type Vote {
    _id: ID
    rank_value: Int
    user_id: String
    choice_id: String
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    polls: [Poll]
    poll(_id: ID!): Poll
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): User
    addPoll(title: String!, is_open: Boolean): Poll
    updatePoll(_id: ID!, is_open: Boolean): Poll
    deletePoll(_id: ID!): Poll
    addChoice(_id: ID!, choice_name: String!): Poll
    updateChoice(_id: ID!, choice_id: ID!, choice_name: String!): Poll
    deleteChoice(_id: ID!, choice_id: ID!): Poll
    addVote(rank_value: Int, user_id: String!, choice_id: String!): Poll
    addComment(_id: ID!, comment_body: String, username: String): Poll
    updateComment(_id: ID!, comment_id: ID!, comment_body: String!): Poll
    deleteComment(_id: ID!, comment_id: ID!): Poll
  }
`;
