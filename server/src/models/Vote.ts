import { Schema, model, Model } from "mongoose";

const voteSchema = new Schema({
  rank_value: {
    type: Number,
    required: true,
  },
  user_id: {
    type: Number,
    required: true,
  },
  choice_id: {
    type: Number,
    required: true,
  },
});

export default voteSchema;
