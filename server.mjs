import { GraphQLServer } from 'graphql-yoga'
import { importSchema } from 'graphql-import'

const typeDefs = importSchema('Query.gql')

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`
  }
}

const server = new GraphQLServer({ typeDefs, resolvers })

server.start(() => console.log('Server is running on localhost:4000'))
