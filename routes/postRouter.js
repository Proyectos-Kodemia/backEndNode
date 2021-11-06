const express = require("express")
const post = require("../usercases/posts")
const user = require("../usercases/user")
const jwt = require("../lib/jwt")
const {authHandler,userHandler} = require("../middlewares/authHandlers")

const router = express.Router();

  
router.get("/", async (req, res, next) => {
       
   try {
    const postAll = await post.get()
    res.status(200).json({
        ok:true,
        message:`All Posts retrieved`,
        payload:{
            postAll,
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
    res.status(200).json({
        ok:true,
        message:`Post {id} retrieved`,
        payload:{
            postId,
        }
    })
   }catch (err) {
     next(err);
     console.log(err);
   }
 });


  // A partir de este punto se necesita token
  
  router.use(authHandler)




router.post("/", async (req, res, next) => {
    const token = req.headers
    const dataPost = req.body

    /// Hay que verificar esta logica para traer el nombre
    // const payload = await jwt.verifyToken(token)
    // console.log(payload)
    // const {id} = payload
    // const userName = user.getById(id)    
    const userName = "Prueba"
   
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
  router.patch("/:id",userHandler, async (req, res, next) => {
    try {
      
    } catch (err) {
      next(err);
      console.log(err);
    }
  });
  
  router.delete("/:id",userHandler, async (req, res, next) => {
    try {
    } catch (err) {
      next(err);
      console.log(err);
    }
  });
  
  module.exports=router;