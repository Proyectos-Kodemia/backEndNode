const jsonwebtoken = require("jsonwebtoken");
const config = require("./config");

const sing = async (payload) => {
  const secret = config.jwt.secret;
  return await jsonwebtoken.sing(payload, secret);
};

const verifyToken = async (token) => {
  const secret = config.jwt.secret;
  return await jsonwebtoken.verify(token, secret);
};

module.exports = { sing, verify };