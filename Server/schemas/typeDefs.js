const {gql} = require('apollo-server-express');

const typeDefs =gql`
  
type User {
    _id: ID
    username: String
    subjects: [Subject]
}
type Subject {
    _id: ID
    title: String
    resources: [resources]

}


`