const path = require("path");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

const startApolloServer = async () => {
  const app = express();

  // Define schemas and resolvers from our project
  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
  });
  // Creating new apollo server instancew
  const server = new ApolloServer({
    schema: schema,
  });
  await server.start();
  // Use app as middleware and path for graphql queries
  server.applyMiddleware({ app, path: "/graphql" });

  app.listen(3000, () => {
    console.log(`Running Graphql server...`);
  });
};

startApolloServer();
