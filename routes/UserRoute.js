const UserController = require('../controllers/UserController')

const router = require('express').Router()

router.get('/', UserController.getAllUser)
router.post('/', UserController.addUser)
router.get('/:userId', UserController.getUser)
router.delete('/:userId', UserController.deleteUser)

module.exports = router