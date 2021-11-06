const express = require("express");
const user = require("../usercases/user")
const jwt = require("../lib/jwt");
const bcrypt = require("bcrypt");

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







router.get("/", async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
    console.log(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
    console.log(err);
  }
});



router.patch("/:id", async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
    console.log(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
    console.log(err);
  }
});

module.exports=router;