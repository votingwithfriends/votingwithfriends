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
    me: User
    users: [User]
    user(_id: ID!): User
    polls: [Poll]
    poll(_id: ID!): Poll
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPoll(title: String!, is_open: Boolean): Poll
    updatePoll(poll_id: ID!, is_open: Boolean): Poll
    deletePoll(poll_id: ID!): Poll
    addChoice(poll_id: ID!, choice_name: String!): Poll
    updateChoice(poll_id: ID!, choice_id: ID!, choice_name: String!): Poll
    deleteChoice(poll_id: ID!, choice_id: ID!): Poll
    addVote(rank_value: Int, user_id: String!, choice_id: String!): Poll
    addComment(poll_id: ID!, comment_body: String): Poll
    updateComment(poll_id: ID!, comment_id: ID!, comment_body: String!): Poll
    deleteComment(poll_id: ID!, comment_id: ID!): Poll
    addVote(
      _id: ID!
      rank_value: Int
      user_id: String!
      choice_id: String!
    ): Poll
  }
`;
