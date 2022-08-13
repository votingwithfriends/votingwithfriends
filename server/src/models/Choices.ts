import { Schema, Types } from "mongoose";

const choicesSchema = new Schema({
  choice_name: {
    type: String,
    required: true,
  },
  choice_id: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  // poll: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Poll",
  //   required: true,
  // },
});

export default choicesSchema;
