import { Schema, Types } from "mongoose";

const choicesSchema = new Schema({
  choice_name: {
    type: String,
  },
});

export default choicesSchema;
