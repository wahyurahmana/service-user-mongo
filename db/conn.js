const { MongoClient } = require("mongodb");
const connectionString = `mongodb+srv://wahyurahmana:${process.env.PASSWORD_DB_ATLAS}@cluster0.b8y02bp.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(connectionString)

let dbConnection;

module.exports = {
  connectToServer :  () => {
    return new Promise((resolve, reject)=> {
      client.connect()
        .then((dbs) => {
          return dbs.db('my_career')
        })
        .then((result)=> {
          dbConnection = result
          resolve("Successfully connected to MongoDB.")
        })
        .catch((err) => {
          reject("Fail connect to MongoDB.")
        });
    })
  },
  getDb: () => {
    return dbConnection;
  },
};