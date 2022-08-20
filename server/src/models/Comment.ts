import { Schema, Types } from "mongoose";

const commentSchema = new Schema({
  comment_body: {
    type: String,
    required: true,
    maxlength: 280,
    unique: false,
    default: null,
  },
  username: {
    type: String,
    required: true,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default commentSchema;
