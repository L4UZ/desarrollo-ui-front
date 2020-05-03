import { ApolloServer, gql } from 'apollo-server';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

require('dotenv').config();

import connectDB from './data/connect-db';

(async () => {
  await connectDB();

  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
})();
