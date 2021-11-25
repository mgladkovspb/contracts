const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const header = req.headers.authorization
    const token = header.split(' ')[1]

    if (!token) {
        return res.status(403).send({
            message: 'No token provided!'
        })
    }

    jwt.verify(token, global.jwtkey, (error, decoded) => {
        if (error) {
            return res.status(403).json({ message: 'Token invalid!' })
        }
        req.user = {
            id: decoded.id,
            token
        }
        next()
    })
}