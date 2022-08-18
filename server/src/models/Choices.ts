import { Schema, Types } from "mongoose";

const choicesSchema = new Schema({
  choice_name: {
    type: String,
    required: true,
    unique: false,
    default: null,
  },
  choice_id: {
    type: Schema.Types.ObjectId,
    unique: false,
    default: () => new Types.ObjectId(),
  },
});

export default choicesSchema;
