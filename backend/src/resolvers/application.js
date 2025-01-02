const Application = require('../models/Application');
const redis = require('../config/redis');
const { Query } = require('.');

const applicationResolvers = {
    Query: {
        applications: async () => {
            const cachedApplications = await redis.get('applications');
            if (cachedApplications) return JSON.parse(cachedApplications);

            const applications = await Application.find();
            await redis.set('applications', JSON.stringify(applications), 'EX', 3600); // Cache for 1 hour
            return applications;
        },
        application: async (_, { id }) => await Application.findById(id),
    },
    Mutation: {
        createApplication: async (_, { candidateId, jobId, status, date }) => {
            const application = new Application({ candidateId, jobId, status, date });
            await redis.del('applications'); // Invalidate cache
            return await application.save();
        },
    },
};

module.exports = applicationResolvers;