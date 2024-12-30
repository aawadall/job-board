const jobResolvers = require('./job');

const resolvers = {
    Query: { ...jobResolvers.Query },
    Mutation: { ...jobResolvers.Mutation },
};

module.exports = resolvers;
