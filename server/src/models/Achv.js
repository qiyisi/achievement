const { model, Schema } = require("mongoose");

const AchvSchema = new Schema({
  title: String,
  body: String,
  createdAt: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = model("Achv", AchvSchema);
