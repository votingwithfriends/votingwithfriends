/** Establish connection to MongoDB using Mongoose */

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/votingwithfriends", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(`Could not connect to MongoDB: ${error}`));

module.exports = mongoose.connection;
