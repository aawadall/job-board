const { gql } = require('apollo-server');

const jobSchema = gql`
    type Job {
        id: ID!
        title: String!
        description: String!
        location: String
        company: String
        requirements: [String]
        postedDate: String
    }

    type Query {
        jobs: [Job]
        job(id: ID!): Job
    }

    type Mutation {
        createJob(title: String!, description: String!, location: String, company: String, requirements: [String]): Job
    }
`;

module.exports = jobSchema;
