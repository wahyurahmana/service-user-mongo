const { MongoClient } = require("mongodb");
const connectionString = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(connectionString)

let dbConnection;

//cara mongodb
module.exports = {
  // connectToServer: function (callback) {
  //   client.connect(function (err, db) {
  //     if (err || !db) {
  //       return callback(err);
  //     }

  //     dbConnection = db.db("sample_airbnb");
  //     console.log("Successfully connected to MongoDB.");

  //     return callback();
  //   });
  // },
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


//cara hacktiv8
// const { MongoClient } = require("mongodb");
// const uri = 'mongodb://127.0.0.1:27017'
// const client = new MongoClient(uri);
// let database

// const run = () => {
//   return new Promise((resolve, reject)=> {
//     client.connect()
//       .then((_) => {
//         return client.db('my_career')
//       })
//       .then((result)=> {
//         database = result
//         resolve(result)
//       })
//       .catch((err) => {
//         reject(err)
//       });
//   })
// }

// const getDatabase = () => {
//   return database
// }

// module.exports = {
//   run,
//   getDatabase
// }