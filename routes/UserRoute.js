const UserController = require('../controllers/UserController')

const router = require('express').Router()

router.get('/', UserController.getAllUser)
router.post('/', UserController.addUser)

module.exports = router