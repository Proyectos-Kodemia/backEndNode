const Post = require("../../models/posts");
const encrypt = require("../../lib/crypt");
const jwt = require("../../lib/jwt");

const create=async (dataPost,userName)=>{
    const {image,title,tags,textContainer} = dataPost
    const post =new Post.model ({userName,image,title,tags,textContainer});
    const savedPost=await post.save();
    return savedPost;
};





const get = async () => {
    return await Post.model.find({}).exec();
};

const getById = async (idPost) => {
    return await Post.model.findById(idPost).exec();
};


const del = (postId) => {
	return Post.model.findByIdAndDelete(postId).exec()
}


module.exports ={
    create,
    get,
    getById,
    del,
}
