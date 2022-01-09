const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const header = req.headers.authorization
    const token = header.split(' ')[1]

    if (!token) {
        return res.status(403).send({
            message: 'No token provided!'
        })
    }

    jwt.verify(token, '1df60c852f59ef1865f1382a9efce836c50d10abe943b10fc4d6a914c107c8a25df6d340935f1d0effcfab31d2b7138f'/*global.jwtkey*/, (error, decoded) => {
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