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
    is_open: Booleam
    user: User
  }

  type Query {
    users: [User]
    user(_id: ID!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
  }
`;
