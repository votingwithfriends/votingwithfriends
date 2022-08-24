const { Schema, model, Model } = require("mongoose");

const voteSchema = new Schema({
  rank_value: {
    type: Number,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  choice_id: {
    type: String,
    required: true,
  },
});

module.exports = voteSchema;
