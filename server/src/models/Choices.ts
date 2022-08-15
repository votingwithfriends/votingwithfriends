import { Schema, Types } from "mongoose";

const choicesSchema = new Schema({
  choice_name: {
    type: String,
    unique: true,
    required: true,
  },
  choice_id: {
    type: Schema.Types.ObjectId,
    unique: true,
    default: () => new Types.ObjectId(),
  },
  // poll: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Poll",
  //   required: true,
  // },
});

export default choicesSchema;
