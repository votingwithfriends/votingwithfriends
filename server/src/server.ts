/** Primary entry point to the VotingWithFriends backend */

import express from "express";
import db from "./config/connection";

const PORT: String | Number = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Launch server once connection to MongoDB has been established
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(
      `\n🚀 VotingWithFriends Server is running on port ${PORT}! Happy coding!`
    );
  });
});
