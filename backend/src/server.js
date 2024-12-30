require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const connectDB = require('./config/db');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

connectDB();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({
        token: req.headers.authorization || '',
    }),
});

server.listen({ port: process.env.PORT }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
