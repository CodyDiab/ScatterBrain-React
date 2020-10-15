const { gql } = require('apollo-server-express');

// need to add subject to user when subject type added
const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    subjects:[Subject]
    
}
type Auth {
    token: ID!
    user: User
}
type Subject {
    _id: ID
    userId:String
    title: String
    createdAt: String
    resources: [Resource]

}
type Resource {
    _id: ID
    title:String
    notes:String
    url: String
    createdAt: String

}

type Query {
    me: User
    user(username: String!): User
    subjects(userId: String): [Subjects]
    subject(_id: ID!): Subject
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addSubject(title: String!,userId: String!):Subject
    deleteSubject(_id: ID!):Subject
    editSubject(title: String!):Subject
    addResource(subjectId: ID!,title: String!,url:String,notes: String):Subject
    deleteResource(_id: ID!):Subject
    editResource(_id: ID!,title: String!,url:String,notes: String):Subject


}

`;

module.exports = typeDefs;