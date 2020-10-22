const { ApolloServer, gql } = require('apollo-server')
const typeDefs = require('./db/shcema')
const resolvers = require('./db/resolvers')

// Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    const miContext = 'Hola'
    return {
      miContext
    }
  }
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
