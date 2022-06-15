const UserController = require('../controllers/UserController')

const router = require('express').Router()

router.get('/', UserController.getAllUser)
router.post('/', UserController.addUser)
router.post('/login', UserController.login)
router.get('/:userId', UserController.getUser)
router.delete('/:userId', UserController.deleteUser)
router.put('/:userId', UserController.updateUser)

module.exports = router