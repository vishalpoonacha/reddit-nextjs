import { gql } from "@apollo/client";

export const ADD_POST = gql`
  mutation MyMutation(
    $body: String!
    $images: String!
    $subreddit_id: ID!
    $title: String!
    $username: String!
  ) {
    insertPost(
      body: $body
      image: $images
      subreddit_id: $subreddit_id
      title: $title
      username: $username
    ) 
    {
      body
      created_at
      id
      image
      subreddit_id
      title
      username
    }
  }
`;
