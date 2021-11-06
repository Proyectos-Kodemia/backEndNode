const express = require("express");
const user = require("../usercases/user");
const jwt = require("../lib/jwt");
const bcrypt = require("bcrypt");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const users=await user.get();
    res.status(200).json({
      status: true,
      message: "Done",
      payload: { users },
    });
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

router.post("/", async (req, res, next) => {
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