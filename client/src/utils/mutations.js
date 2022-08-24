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
  mutation addChoice($poll_id: ID!, $choice_name: String!) {
    addChoice(poll_id: $poll_id, choice_name: $choice_name) {
      choices {
        choice_name
        _id
      }
    }
  }
`;
