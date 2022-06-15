const express = require('express')
const {connectToServer, getDb} = require('./db/conn')
const allRouter = require('./routes')
const app = express()
const port = 3000
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

connectToServer()
.then((result) => {
  console.log(result)
  app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  })
}).catch((err) => {
  console.log(err)
});

app.use(allRouter)

// app.get('/', async (req, res, next)=> {
//   try {
    // const users = await getDb().collection('Users')
    // const data = await users.find().toArray()
    // console.log(data)
//   } catch (error) {
//     console.log(error)
//   }

// })