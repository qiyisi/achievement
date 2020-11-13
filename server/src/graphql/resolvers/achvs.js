const { AuthenticationError, UserInputError } = require("apollo-server");
const ObjectId = require("mongoose").Types.ObjectId;

const Achv = require("../../models/Achv");
const checkAuth = require("../../util/checkAuth");

module.exports = {
  Query: {
    async getAchvs(_, __, context) {
      const user = checkAuth(context);
      const achvs = await Achv.find({ user: ObjectId(user.id) });
      return achvs;
    },
  },
  Mutation: {
    async createAchv(_, { title }, context) {
      const user = checkAuth(context);
      if (title.trim() === "") {
        throw new UserInputError("Achv body must not be empty");
      }
      const newAchv = new Achv({
        title,
        user: user.id,
        createdAt: new Date().toISOString(),
      });
      const achv = await newAchv.save();
      return achv;
    },
    async deleteAchv(_, { achvId }, context) {
      const user = checkAuth(context);
      try {
        const achv = await Achv.findById(achvId);
        if (achv.user.toString() === user.id) {
          await achv.delete();
          return "Achv deleted successfully";
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
