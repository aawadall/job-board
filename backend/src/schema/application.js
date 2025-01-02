const { gql } = require('apollo-server');

const applicationSchema = gql`
    type Application {
        id: ID!
        candidateId: ID!
        jobId: ID!
        status: String!
        date: String!
    }

    type Query {
        applications: [Application]
        application(id: ID!): Application
    }

    type Mutation {
        createApplication(candidateId: ID!, jobId: ID!, status: String!, date: String!): Application
    }
`;

module.exports = applicationSchema;