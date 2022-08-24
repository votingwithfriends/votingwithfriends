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

export const ADD_VOTE = gql`
  mutation AddVote(
    $id: ID!
    $userId: String!
    $choiceId: String!
    $rankValue: Int
  ) {
    addVote(
      _id: $id
      user_id: $userId
      choice_id: $choiceId
      rank_value: $rankValue
    ) {
      _id
      title
      votes {
        _id
        rank_value
        user_id
        choice_id
      }
    }
  }
`;

export const UPDATE_POLL = gql`
  mutation UpdatePoll($pollId: ID!, $isOpen: Boolean) {
    updatePoll(poll_id: $pollId, is_open: $isOpen) {
      _id
      title
      is_open
    }
  }
`;
