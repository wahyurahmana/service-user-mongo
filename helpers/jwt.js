const jwt = require('jsonwebtoken');

module.exports = {
  sign : (payload) => {
    const access_token = jwt.sign(payload, `${process.env.JWT_SECRET}`)
    return access_token
  },
  verify : (token) => {
    const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`);
  }
}