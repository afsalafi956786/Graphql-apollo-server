const { gql } = require('apollo-server-express')

const typeDefs = gql`
 type Post {
    _id:ID
    title:String
    description:String
 }

 input PostInput {
  title:String
  description:String
 }

  type Query {
      hello:String
      getAll :[Post]
  }

  type Mutation{
    createPost(post :PostInput ): Post
    updatePost (_id:String,post:PostInput) :Post
    deletePost (_id:String) :String
  }
`

module.exports = typeDefs