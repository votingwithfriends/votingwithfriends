import { Schema, model, Model } from "mongoose";

const voteSchema = new Schema({
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
  poll: {
    type: Schema.Types.ObjectId,
    ref: "Poll",
    required: true,
  },
  choice: {
    type: Schema.Types.ObjectId,
    ref: "Choice",
    required: true,
  },
  rank_value: {
    type: Number,
    required: true,
  },
});

const Vote = model("Vote", voteSchema);

export default Vote;
