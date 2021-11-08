const jwt = require("../lib/jwt")
const user = require("../usercases/user/index")
const post = require("../usercases/posts/index")

const authHandler = async (req,res,next)=>{
    const {token} = req.headers
    

    try{
        const payload = await jwt.verifyToken(token)
        next()
        
    }catch(error){
        res.status(403).json({
            ok:false,
            message:"User not Authorized",
            error:error,
        })
        next(error)
    }
    
}


const userHandler = async (req,res,next)=>{

    const {token} =req.headers
    console.log("token:", token)
    const payload = await jwt.verifyToken(token)
    console.log("payload:",payload)
    const {sub} = payload
    console.log("id",sub)

    const {id} =req.params
    console.log("UserId",id)
    try{
        if(id === sub){
            console.log("entro al if")
        next()
        }else{
            throw new Error("Id Usuario no corresponde")
        }
    }catch(error){
        res.status(403).json({
            ok:false,
            message:"No tienes permiso de modificar un usuario distinto al tuyo",
            error:error,
        })
        next(error)
    }
}

const postHandler = async (req,res,next)=>{

    const {token} =req.headers
    const payload = await jwt.verifyToken(token)
    const {sub} = payload


    console.log("Sub",sub)
    const {id} = req.params
    
    const postObject = await post.getById(id)
    

    const {idAuthor} = postObject   
    console.log("idAuthor",idAuthor)

    try{
        if(idAuthor === sub){
           console.log("entro al if")
           next()
           res.status(200).json({
               status:true,
               message:`Post ${id} succesfully modified`,
               
           })
        }else{
            throw new Error("Id Usuario no corresponde")
        }
    }catch(error){
        res.status(403).json({
            ok:false,
            message:"No tienes permiso de modificar un post no creado por ti",
            error:error,
        })
        next(error)
    }
}



module.exports = {authHandler,userHandler,postHandler}