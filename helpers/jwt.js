const jwt = require('jsonwebtoken')

function getToken(input) {
    const token = jwt.sign(input, process.env.SECRET_KEY)
    return token    
}

function verifyToken(token) {
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    return decoded
}

module.exports = {
    getToken,
    verifyToken
} 