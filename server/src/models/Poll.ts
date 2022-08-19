import { Schema, model, Model, ObjectId } from "mongoose";
import choicesSchema from "./Choices";
import voteSchema from "./Vote";
import commentSchema from "./Comment";
import { User } from "./User";

interface IPoll {
  title: string;
  is_open: boolean;
  user: ObjectId;
  choices: any;
  comments: any;
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
  votes: [voteSchema],
  comments: [commentSchema],
});

const Poll = model<IPoll, PollModel>("Poll", pollSchema);

export default Poll;
