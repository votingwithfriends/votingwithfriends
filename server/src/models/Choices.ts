import { Schema, model, Model } from "mongoose";

const ChoicesSchema = new Schema({
  choice_name: {
    type: String,
    required: true,
  },
  poll_id: {
    type: Number,
    required: true,
    references: {
      model: "poll",
      key: "id",
    },
  },
});

const Choices = model("Choices", ChoicesSchema);

export default Choices;
