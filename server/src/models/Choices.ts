import { Schema, model, Model } from "mongoose";

const choicesSchema = new Schema({
  choice_name: {
    type: String,
    required: true,
  },
  poll: {
    type: Schema.Types.ObjectId,
    ref: "Poll",
    required: true,
  },
});

const Choices = model("Choices", choicesSchema);

export default Choices;
