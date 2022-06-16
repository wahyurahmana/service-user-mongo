const UserModel = require("../models/UserModel")
const {compare} = require('../helpers/bcryptjs')
const { sign } = require("../helpers/jwt")
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

  static async getUser (req, res, next) {
    try {
      const data = await UserModel.getUser(req.params.userId)
      res.status(200).json({status : true, data})
    } catch (error) {
      console.log(error)
    }
  }

  static async deleteUser (req, res, next) {
    try {
      const data = await UserModel.deleteUser(req.params.userId)
      res.status(200).json({status : true, message : `success delete id ${req.params.userId}`})
    } catch (error) {
      console.log(error)
    }
  }
  
  static async updateUser(req, res, next){
    try {
      const data = {
        username : req.body.username,
        email : req.body.email,
        password : req.body.password,
        role : req.body.role,
        phoneNumber : req.body.phoneNumber,
        address : req.body.address,
      }
      await UserModel.updateUser(req.params.userId, data)
      res.status(200).json({status : true, message : `success update id ${req.params.userId}`})
    } catch (error) {
      console.log(error)
    }
  }

  static async login (req, res, next){
    try {
      const data = await UserModel.getUser(undefined, req.body.email)
      if (data.length !== 0) {
        if (compare(req.body.password, data[0].password)) {
          const access_token = sign({id : data[0]._id, email : data[0].email})
          res.status(200).json({status : true, data : {access_token}})
        } else {
          res.status(401).json({status : false, message : 'wrong email/password'})
        }
      }else{
        res.status(401).json({status : false, message : 'wrong email/password'})
      }
    } catch (error) {
      console.log(error)
    }
  }
}