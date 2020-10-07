const { gql } = require('apollo-server-express');

// need to add subject to user when subject type added
const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    
}
type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
    user(username: String!): User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth

}

`;

module.exports = typeDefs;