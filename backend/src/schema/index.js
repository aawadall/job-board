const jobSchema = require('./job');
const candidateSchema = require('./candidate');
const typeDefs = [jobSchema, candidateSchema];

module.exports = typeDefs;
