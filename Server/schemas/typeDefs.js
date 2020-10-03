const {gql} = require('apollo-server-express');

const typeDefs =gql`
  
type User {
    _id: ID
    username: String
    subjects: [Subject]
}
type Subject {
    _id: ID
    userId: String
    title: String
    createdAt: String
    resources: [Resource]

}
type Resource {
    _id : ID
    title: String
    url: String
    notes: String
    createdAt: String


}
type Auth {
    token: ID!
    user: User
}
type Query {
    me: User
    user(username: String!): User
    subjects(userId: String!):[Subject]
    subject(_id: ID!): Subject
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addSubject(title: String!):Subject
    editSubject(title: String):Subject
    addResource(title: String!,url: String!,notes: String):Subject
    editResource(title: String!,url:String!,notes: String):Subject
    deleteSubject(_id: ID!):Subject
    deleteResource(_id: ID!):Subject
 }

`
module.exports = typeDefs;