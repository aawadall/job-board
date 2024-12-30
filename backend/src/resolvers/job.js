const Job = require('../models/Job');
const redis = require('../config/redis');

const jobResolvers = {
    Query: {
        jobs: async () => {
            const cachedJobs = await redis.get('jobs');
            if (cachedJobs) return JSON.parse(cachedJobs);

            const jobs = await Job.find();
            await redis.set('jobs', JSON.stringify(jobs), 'EX', 3600); // Cache for 1 hour
            return jobs;
        },
        job: async (_, { id }) => await Job.findById(id),
    },
    Mutation: {
        createJob: async (_, { title, description, location, company, requirements }) => {
            const job = new Job({ title, description, location, company, requirements });
            await redis.del('jobs'); // Invalidate cache
            return await job.save();
        },
    },
};

module.exports = jobResolvers;
