import { useQuery, gql } from "@apollo/client";

const GET_USERS = gql`
  query GetUsers {
    getUsers {
      username
      email
      createdAt
    }
  }
`;

const Test = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  console.log({ loading, error, data });
  return <div>Test</div>;
};

export default Test;
