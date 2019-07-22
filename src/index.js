import { ApolloServer } from "apollo-server-express";
import typeDefs from "./typeDefs";
import express from "express";
import mongoose from "mongoose";
import resolvers from "./resolvers";
import { APP_PORT, IN_PROD, MONGO_URI, NODE_ENV } from "./config/keys";
import cors from "cors";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: false,
  playground: true
});

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB.."))
  .catch(err => console.log("Error: " + err));

const app = express();
//Allow Cors
app.use(cors());
app.disable("x-powered-by");
server.applyMiddleware({ app, cors: false });

app.listen({ port: APP_PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${APP_PORT}${server.graphqlPath}`
  )
);
