const { gql } = require('apollo-server');

const candidateSchema = gql`
    type Candidate {
        id: ID!
        name: Name!
        contacts: Contacts!
        location: String
        skills: [String]
        experience: String
        education: String
        notes: String
    }

    type Name {
        first: String!
        middle: String
        last: String!
    }

    type Contacts {
        phone: String!
        email: String!
    }

    type Query {
        candidates: [Candidate]
        candidate(id: ID!): Candidate
    }

    type Mutation {
        createCandidate(
            name: NameInput!,
            contacts: ContactsInput!,
            location: String,
            skills: [String],
            experience: String,
            education: String,
            notes: String
        ): Candidate
    }
`;

module.exports = candidateSchema;