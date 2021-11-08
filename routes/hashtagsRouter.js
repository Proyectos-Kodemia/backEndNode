const express = require("express");
const user = require("../usercases/user");

const router = express.Router();



router.get("/", async (req, res, next) => {
  
  const tagsObject = await user.getAll();
  try {
    res.status(200).json({
      status:true,
      message:"Tags retrieved succesfully",
      payload:{
        tagsObject,
      }
    });
  } catch (err) {
    next(err);
    console.log(err);
  }
});

module.exports = router;
