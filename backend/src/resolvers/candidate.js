const Candidate = require('../models/Candidate');
const redis = require('../config/redis');

const candidateResolvers = {
    Query: {
        candidates: async () => {
            const cachedCandidates = await redis.get('candidates');
            if (cachedCandidates) return JSON.parse(cachedCandidates);

            const candidates = await Candidate.find();
            await redis.set('candidates', JSON.stringify(candidates), 'EX', 3600); // Cache for 1 hour
            return candidates;
        },
        candidate: async (_, { id }) => await Candidate.findById(id),
    },
    Mutation: {
        createCandidate: async (_, { name, contacts, location, skills, experience, education, notes }) => {
            const candidate = new Candidate({ 
                name: {
                    first: name.first,
                    middle: name.middle,
                    last: name.last
                },
                contacts: {
                    phone: contacts.phone,
                    email: contacts.email
                },
                location, 
                skills, 
                experience, 
                education, 
                notes 
            });
            await redis.del('candidates'); // Invalidate cache
            return await candidate.save();
        },
    },
};

module.exports = candidateResolvers;