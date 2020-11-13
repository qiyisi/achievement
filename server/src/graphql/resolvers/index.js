const userResolvers = require("./users");
const achvResolvers = require("./achvs");

module.exports = {
  Query: {
    ...userResolvers.Query,
    ...achvResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...achvResolvers.Mutation,
  },
};
