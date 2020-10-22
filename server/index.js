const { ApolloServer, gql } = require('apollo-server')
const typeDefs = require('./db/shcema')
const resolvers = require('./db/resolvers')
const connection = require('./config/connection')

connection()

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

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
