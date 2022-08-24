const { Schema, model } = require("mongoose");
const choicesSchema = require("./Choices");
const voteSchema = require("./Vote");
const commentSchema = require("./Comment");

const pollSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  is_open: {
    type: Boolean,
    required: true,
    default: true,
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  choices: [choicesSchema],
  votes: [voteSchema],
  comments: [commentSchema],
});

const Poll = model("Poll", pollSchema);

module.exports = Poll;
