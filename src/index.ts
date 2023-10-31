import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchema } from "@graphql-tools/load";
import { resolvers } from "./schema/resolvers/resolvers";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const schema = await loadSchema("./src/**/*.graphql", {
    loaders: [new GraphQLFileLoader()],
  });

  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
}

startServer();
