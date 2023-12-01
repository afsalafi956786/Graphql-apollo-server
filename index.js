const express = require('express')
const  { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers')
const app = express()


const URL = 'mongodb://127.0.0.1:27017/Graphql'


mongoose.connect(URL,{
    useNewUrlParser:true
}).then(()=>{
    console.log('database conncted successfuly')
})



const startServer = async ()=>{
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })
    await apolloServer.start();
    apolloServer.applyMiddleware({ app : app})
    app.listen(7000,()=>{
        console.log('server connected to the port')
    })

}
startServer()


//create post like this 
// mutation{
//     createPost(post:{
//       title:"wrestling",
//       description:"The first 2023 wrestle mani going to start"
//     })
//     {
//       _id,
//       title,
//       description
//     }
//   }


//updation
// mutation{
//   updatePost(_id:"656975c1c1ac598c31ab931a",post:{
//     title:"Monday Raw"
//   })
//   {
//     _id
//     title
//     description
//   }
// }