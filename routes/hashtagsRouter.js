const express = require("express");
const tags = require("../usercases/hashtags");

const router = express.Router();



router.get("/", async (req, res, next) => {
  
  const tagsObject = await tags.getAll();
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
