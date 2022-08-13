import { Schema, model, Model, ObjectId } from "mongoose";

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
  choices: [
    {
      type: Schema.Types.ObjectId,
      ref: "Choices",
    },
  ],
});

const Poll = model<IPoll, PollModel>("Poll", pollSchema);

export default Poll;
