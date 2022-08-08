/** Establish connection to MongoDB using Mongoose */

import mongoose, { ConnectOptions } from "mongoose";

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/votingwithfriends", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .catch((error) => console.log(`Could not connect to MongoDB: ${error}`));

export default mongoose.connection;
