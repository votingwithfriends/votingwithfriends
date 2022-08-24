const { Schema, Types } = require("mongoose");

const choicesSchema = new Schema({
  choice_name: {
    type: String,
  },
});

module.exports = choicesSchema;
