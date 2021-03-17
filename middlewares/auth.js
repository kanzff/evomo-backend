const { verifyToken } = require("../helpers/jwt")
const { User } = require('../models/index')

async function authenticate(req, res, next) {
    try {
        const access_token = req.headers.access_token
        if(!access_token){
            next({ name: 'Authentication Failed' })
        }else{
            const decoded = verifyToken(access_token)
            const user = await User.findOne({
                where: {
                    username: decoded.username
                }
            })
            if (!user){
                throw { name: 'Invalid Username / Password' }
            }else{
                req.loggedInUser = decoded
                next()
            }
        }
    } catch (err) {
        next(err)
    }
}

function authorize (req, res, next) {
    if (req.loggedInUser.role == "admin" || req.loggedInUser.role == "superadmin") {
      next()
    } else {
      next({ name: 'Unauthorized'})
    }
}

module.exports = { authenticate, authorize }