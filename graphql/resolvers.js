const Post = require('../models/post')
const resolvers = {
    Query :{
        getAll :async ()=>{
            try{
             const post = await Post.find();
             return post;
            }catch(error){
                console.log(error.message)
            }

        },
    },
    Mutation: {
        createPost :async (parent,args)=>{
            const {title ,description } = args.post
            const post =  new Post({ title,description})
            await post.save();
            return post;
        },
        updatePost : async( parent ,args)=>{
            const { _id } = args
            const {title ,description } = args.post;
            const post = await  Post.findByIdAndUpdate(_id,
                {title,description},
                {new:true}
                );
                await post.save();
                return post;

        },
        deletePost :async(parent,args)=>{
            try{
                const {_id} = args
               await Post.findByIdAndDelete(_id);
               return "deleted successfully"

            }catch(error){
                console.log(error.message)
            }
        }
    }
}

module.exports= resolvers;



