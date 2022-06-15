const { ObjectId } = require("mongodb")
const { getDb } = require("../db/conn")
const { hash } = require("../helpers/bcryptjs")

//belum validasi
module.exports = class UserModel {
  static async getAllUser () {
    try {
      const users = await getDb().collection('Users')
      const data = await users.find().toArray()
      return data
    } catch (error) {
      console.log(error, 'dari model getAllUser')
    }
  }

  static async addUser (data) {
    try {
      const newData = {
        ...data,
        password : hash(data.password)
      }
      const users = await getDb().collection('Users')
      const result = await users.insertOne(newData)
      return result
    } catch (error) {
      console.log(error, 'dari model addUser')
    }
  }

  static async getUser (userId) {
    try {
      const users = await getDb().collection('Users')
      const data = await users.find({
        _id : ObjectId(userId)
      }).toArray()
      return data
    } catch (error) {
      console.log(error, 'dari model getUser')
    }
  }

  static async deleteUser (userId) {
    try {
      const users = await getDb().collection('Users')
      const data = await users.deleteOne({
        _id : ObjectId(userId)
      })
      return data
    } catch (error) {
      console.log(error, 'dari model deleteUser')
    }
  }

  static async updateUser(userId, data){
    try {
      const newData = {
        ...data,
        password : hash(data.password)
      }
      const users = await getDb().collection('Users')
      const result = await users.updateOne({
        _id : ObjectId(userId)
      }, {
        $set : newData
      })
      return result
    } catch (error) {
      console.log(error, 'ini dari modle update user')
    }
  }
}