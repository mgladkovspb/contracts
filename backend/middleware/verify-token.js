const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    let token = req.headers["x-access-token"]
    return next()
    if (!token) {
        return res.status(403).send({
            message: 'No token provided!'
        })
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.end(401)
        }
        req.userId = decoded.id
        next()
    })
}