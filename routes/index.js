const router = require('express').Router()
const UserRoutes = require('./UserRoute')
router.get('/', (req, res) => {
  res.status(200).json({status : true, message : 'Berhasil'})
})

router.use('/users', UserRoutes)

module.exports = router