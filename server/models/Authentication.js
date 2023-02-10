const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
saltRounds = 12;

async function verifyPassword(password, hash) {
  return await bcrypt.compare(password, hash);
}
async function hashedPassword(password, saltRounds) {
  return await bcrypt.hash(password, saltRounds);
}
function createToken(payload) {
  const secret = process.env.JWT_SECRET || "secret";
  const options = {
    expiresIn: "1h",
  };
  return jwt.sign(payload, secret, options);
}

module.exports = {
  verifyPassword,
  hashedPassword,
  createToken,
};
