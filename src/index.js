import { ApolloServer } from "apollo-server-express";
import typeDefs from "./typeDefs";
import express from "express";
import resolvers from "./resolvers";

const { APP_PORT = 4001, NODE_ENV = "development" } = process.env;
const IN_PROD = NODE_ENV === "production";
const server = new ApolloServer({
  typeDefs,
  resolvers,
  path: "/graphql"
});

const app = express();
app.disable("x-powered-by");
server.applyMiddleware({ app });

app.listen({ port: APP_PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${APP_PORT}${server.graphqlPath}`
  )
);
