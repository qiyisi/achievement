const { gql } = require("apollo-server");

const typeDefs = gql`
  input RegisterInput {
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  type Query {
    getUsers: [User]
  }
  type Mutation {
    login(username: String!, password: String!): User!
    register(registerInput: RegisterInput): User!
  }
`;

module.exports = typeDefs;
