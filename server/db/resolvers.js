const resolvers = {
  Query: {
    obtenerCursos: (_, { input }, ctx) => {
      console.log({ ctx })
      return null
    }
  }
}

module.exports = resolvers
