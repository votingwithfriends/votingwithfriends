import { Schema, model, Model } from "mongoose";

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
});

const Poll = model("Poll", pollSchema);

export default Poll;
