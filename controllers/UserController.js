const UserModel = require("../models/UserModel")

module.exports = class UserController {
  static async getAllUser (req, res, next) {
    try {
      const data = await UserModel.getAllUser()
      res.status(200).json({status : true, data})
    } catch (error) {
      console.log(error)
    }
  }
  static async addUser (req, res, next) {
    try {
      const data = {
        username : req.body.username,
        email : req.body.email,
        password : req.body.password,
        role : req.body.role,
        phoneNumber : req.body.phoneNumber,
        address : req.body.address,
      }
      await UserModel.addUser(data)
      res.status(200).json({status : true, message : 'success add user'})
    } catch (error) {
      console.log(error)
    }
  }
}