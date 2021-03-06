const express = require("express");
const user = require("../usercases/user")
const jwt = require("../lib/jwt");
const bcrypt = require("bcrypt");
const {authHandler,userHandler} = require("../middlewares/authHandlers")

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const userData = req.body
    const userCreated = await user.create(userData)
    const {username} =userCreated
    res.status(201).json({
        ok:true,
        message:"User Created successfully",
        payload:{
            username,
        }
    })
  } catch (err) {
    next(err);
    console.log(err);
  }
});

// A partir de este punto se necesita token

router.use(authHandler)


router.get("/:id", async (req, res, next) => {
   const {id} = req.params

    const userObject = await user.getById(id)
  try {
    res.json({
                
      id:userObject.id,
      userName:userObject.name,
    })  
  }catch (err) {
    next(err);
    console.log(err);
  }
});

// Usamos userhHandler para que solo el usuario puede modificar su propio registro
router.patch("/:id",userHandler, async (req, res, next) => {
  try {
    const {id}=req.params
    const userData=req.body

    console.log(userData)
    const userUpdate = await user.update(id,userData)
    res.status(200).json({
      status:true,
      message:"Update succesfull",
      payload:{
        userId:userUpdate._id,
        name:userUpdate.name,
        username:userUpdate.username,
      }
    })
    
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