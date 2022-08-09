import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
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
