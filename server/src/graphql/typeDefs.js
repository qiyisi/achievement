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
  type Achv {
    id: ID!
    user: ID!
    title: String!
    body: String
    createdAt: String!
  }
  type Query {
    getUsers: [User]
    getAchvs: [Achv]
  }
  type Mutation {
    login(email: String!, password: String!): User!
    register(registerInput: RegisterInput): User!
    createAchv(title: String!): Achv!
    deleteAchv(achvId: ID!): String!
  }
`;

module.exports = typeDefs;
