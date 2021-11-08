const Post = require("../../models/posts");
const encrypt = require("../../lib/crypt");
const jwt = require("../../lib/jwt");

const create=async (dataPost,userName,idAuthor)=>{
    const {image,title,tags,textContainer} = dataPost
    const post =new Post.model ({userName,idAuthor,image,title,tags,textContainer});
    const savedPost=await post.save();
    return savedPost;
};



//date= aaaa-mm-dd


const get = async (search,date) => {
    let resp
    if(search){
        console.log("get user case:",search)
        // .find({ $or: [ ] })
        // {title:{ $regex:search}}
        let regx=`/${search}/ig`
        

        resp=await Post.model.find({$or:[{userName:{$regex:regx}},{title:{$regex:regx}},{tags:{$regex:regx}}, {textContainer:{$regex:regx}}]}).exec();
    }else if(date){
        
        const dateInit = new Date(date)
        const dateLast = dateInit.setMinutes(dateInit.getMinutes()+1440)
        console.log("datelast",dateLast)
        resp=await Post.model.find({dateCreation:{ $gte: date, $lte: dateLast }}).exec();
        
    }else{
        resp=await Post.model.find({}).exec();
    }
    console.log("respuesta del search",resp)
    return resp
// incluir parametros search y date
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
