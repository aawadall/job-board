const jobSchema = require('./job');
const candidateSchema = require('./candidate');
const applicationSchema = require('./application');
const typeDefs = [jobSchema, candidateSchema, applicationSchema];

module.exports = typeDefs;
