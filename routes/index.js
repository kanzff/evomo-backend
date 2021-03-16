const router = require('express').Router()
const userRoutes = require('./user_routes')

router.use('/user', userRoutes)

module.exports = router