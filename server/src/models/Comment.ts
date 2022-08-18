import { Schema, Types } from "mongoose";

const commentSchema = new Schema({
  commentBody: {
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
  comment_id: {
    type: Schema.Types.ObjectId,
    unique: false,
    default: () => new Types.ObjectId(),
  },
});

export default commentSchema;
