import { gql } from "@apollo/client";

export const GET_ACHVS = gql`
  {
    getAchvs {
      id
      title
      createdAt
      user
    }
  }
`;
