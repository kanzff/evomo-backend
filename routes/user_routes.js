const router = require('express').Router()
const { UserController } = require('../controllers/user_controllers')
const { authenticate, authorize} = require('../middlewares/auth')

router.post('/login', UserController.login)

router.use(authenticate)

router.get('/', UserController.find)
router.get('/:id', UserController.findById)

router.use(authorize)

router.post('/register', UserController.register)
router.put('/:id', UserController.update)
router.delete('/:id', UserController.remove)

module.exports = router
