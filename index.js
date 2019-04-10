const { ApolloServer } = require('apollo-server');
const { typeDefs }  = require('./schema')
const resolvers = require('./resolvers')
const OpportunityAPI = require('./datasources')

const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  dataSources: () => ({
    opportunityAPI: new OpportunityAPI(),
  }),
  playground: true,
  introspection: true,
 });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});