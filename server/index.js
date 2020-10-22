const { ApolloServer, gql } = require('apollo-server')
const typeDefs = require('./db/shcema')
const resolvers = require('./db/resolvers')

const cursos = [
  {
    titulo: 'JavaScript Moderno Guía Definitiva Construye +10 Proyectos',
    tecnologia: 'JavaScript ES6'
  },
  {
    titulo: 'React – La Guía Completa: Hooks Context Redux MERN +15 Apps',
    tecnologia: 'React'
  },
  {
    titulo: 'Node.js – Bootcamp Desarrollo Web inc. MVC y REST API’s',
    tecnologia: 'Node.js'
  },
  {
    titulo: 'ReactJS Avanzado – FullStack React GraphQL y Apollo',
    tecnologia: 'React'
  }
]

// Server
const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
