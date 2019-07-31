import { ApolloServer } from "apollo-server";
import typeDefs from "./typeDefs";
import mongoose from "mongoose";
import resolvers from "./resolvers";
import { IN_PROD, MONGO_URI, NODE_ENV } from "./config/keys";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  context: ({ req }) => ({ req })
});

try {
  await mongoose.connect(MONGO_URI, { useNewUrlParser: true }).then(() => {
    server.listen({ port: APP_PORT }).then(res => {
      console.log(`Server ready at ${res.url}`);
    });
  });
} catch (err) {
  console.log(err);
}
