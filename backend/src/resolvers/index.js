const jobResolvers = require('./job');
const candidateResolvers = require('./candidate');

const resolvers = {
    Query: { ...jobResolvers.Query, ...candidateResolvers.Query },
    Mutation: { ...jobResolvers.Mutation, ...candidateResolvers.Mutation },
};

module.exports = resolvers;
