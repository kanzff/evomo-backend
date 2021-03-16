const router = require('express').Router()
const { UserController } = require('../controllers/user_controllers')

router.get('/', UserController.find)
router.get('/:id', UserController.findById)
router.post('/register', UserController.register)
// router.post('/login', UserController.login)
router.put('/:id', UserController.update)
router.delete('/:id', UserController.remove)

module.exports = router
