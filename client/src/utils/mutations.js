import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_POLL = gql`
  mutation addPoll($title: String!) {
    addPoll(title: $title) {
      _id
      title
      is_open
    }
  }
`;

export const ADD_CHOICE = gql`
mutation addChoice($addChoicePollId1: ID!, $addChoiceChoiceName2: String!) {
  addChoice(poll_id: $addChoicePollId2, choice_name: $addChoiceChoiceName2) {
    choices {
      choice_name
      _id
    }
  }
}`
