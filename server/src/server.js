/** Primary entry point to the VotingWithFriends backend */

const express = require("express");
const db = require("./config/connection");
const { ApolloServer } = require("apollo-server-express");
const { resolvers, typeDefs } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const PORT = process.env.PORT || 3001;
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

// Create Apollo Server Instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  // Launch server once connection to MongoDB has been established
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../../client/dist")));
  }
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/dist/index.html"));
  });
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(
        `\nš VotingWithFriends Server is running on port ${PORT}! Happy coding!`
      );
      console.log("GraphQL playground: http://localhost:3001/graphql");
    });
  });
};

startApolloServer(typeDefs, resolvers);
