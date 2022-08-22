import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;

export const QUERY_USER = gql`
  query User($id: ID!) {
    user(_id: $id) {
      _id
      username
      email
      polls {
        _id
        title
        is_open
      }
      friends {
        _id
        username
      }
      friendCount
    }
  }
`;

export const QUERY_POLLS = gql`
  query allPolls {
    polls {
      _id
      title
      is_open
      user {
        _id
        username
      }
    }
  }
`;

export const QUERY_POLL = gql`
  query Poll($id: ID!) {
    poll(_id: $id) {
      _id
      title
      is_open
      choices {
        _id
        choice_name
      }
      votes {
        _id
        rank_value
        user_id
        choice_id
      }
      comments {
        _id
        comment_body
        username
        createdAt
      }
      user {
        _id
        username
      }
    }
  }
`;

export const QUERY_POLL_VOTES = gql`
  query Poll($id: ID!) {
    poll(_id: $id) {
      _id
      title
      is_open
      votes {
        _id
        rank_value
        user_id
        choice_id
      }
    }
  }
`;
