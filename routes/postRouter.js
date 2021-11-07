const express = require("express")
const post = require("../usercases/posts")
const user = require("../usercases/user")
const jwt = require("../lib/jwt")
const {authHandler,userHandler} = require("../middlewares/authHandlers")

const router = express.Router();

  
router.get("/", async (req, res, next) => {
    //posts/?search=
    //posts/?date=
       
   const {search} = req.query
   const {date} = req.query

   console.log("search req.query:",search)
   console.log("date req.query:",date)
   try {
    
        const postRetrieve = await post.get(search,date)
        res.status(200).json({
            ok:true,
            message:`Posts retrieved`,
            payload:{
                postRetrieve,
            }
        })
    
    
   }catch (err) {
     next(err);
     console.log(err);
   }
 });


  
router.get("/:id", async (req, res, next) => {
    const {id} = req.params
    
   try {
    const postId = await post.getById(id)
       if(postId){
        
        res.status(200).json({
            ok:true,
            message:`Post {id} retrieved`,
            payload:{
                postId,
            }
        })
       }else{
        res.status(404).json({
            ok:false,
            message:`Post id not found`,
            payload:{
                postId,
            }
        })
       }
    
   }catch (err) {
     next(err);
     console.log(err);
   }
 });


  // A partir de este punto se necesita token
  
  router.use(authHandler)




router.post("/", async (req, res, next) => {
    const {token} = req.headers
    
    const dataPost = req.body

    // / Hay que verificar esta logica para traer el nombre
    const payload = await jwt.verifyToken(token)
    
    const {sub} = payload
    const userObject = await user.getById(sub)    
    const userName = userObject.username
   
    try {
        
       const postCreated = await post.create(dataPost,userName)

        res.status(200).json({
            ok:true,
            message:"Post created sucessfully",
            payload:{
                postCreated,
            }
        })

    } catch (err) {
      next(err);
      console.log(err);
    }
  });
  

  
  // Usamos userhHandler para que solo el usuario puede modificar su propio registro
  router.patch("/:id", async (req, res, next) => {
    try {
      
    } catch (err) {
      next(err);
      console.log(err);
    }
  });
  
  router.delete("/:id", async (req, res, next) => {
      const {id}= req.params
    try {
        const postDel = await post.del(id)
                res.status(200).json({
            ok:true,
            message:`Post ${id} deleted`,
            payload:{
                postDel,
            }
        })
    } catch (err) {
      next(err);
      console.log(err);
    }
  });
  
  module.exports=router;