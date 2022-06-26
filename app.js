require('dotenv').config()
const express = require('express')
const {connectToServer} = require('./db/conn')
const allRouter = require('./routes')
const app = express()
const port = process.env.PORT || 3000
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
