import { Schema, model, Model, ObjectId } from "mongoose";
import choicesSchema from "./Choices";

interface IPoll {
  title: string;
  is_open: boolean;
  user: ObjectId;
}

type PollModel = Model<IPoll, {}>;

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
});

const Poll = model<IPoll, PollModel>("Poll", pollSchema);

export default Poll;
