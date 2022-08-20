/** Primary entry point to the VotingWithFriends backend */

import express from "express";
import db from "./config/connection";
import { ApolloServer } from "apollo-server-express";
import { resolvers, typeDefs } from "./schemas";
import { authMiddleware } from "./utils/auth";
const PORT: String | Number = process.env.PORT || 3001;

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

const startApolloServer = async (typeDefs: any, resolvers: any) => {
  await server.start();
  server.applyMiddleware({ app });
  // Launch server once connection to MongoDB has been established
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(
        `\n🚀 VotingWithFriends Server is running on port ${PORT}! Happy coding!`
      );
      console.log("GraphQL playground: http://localhost:3001/graphql");
    });
  });
};

startApolloServer(typeDefs, resolvers);
