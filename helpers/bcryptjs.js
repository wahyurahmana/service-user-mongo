const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(12);

module.exports = {
  hash : (input) => {
    const result = bcrypt.hashSync(input, salt)
    return result
  },
  compare : (input, hash) => {
    const result =  bcrypt.compareSync(input, hash)
    return result
  }
}