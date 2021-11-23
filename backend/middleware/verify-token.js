const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const header = req.headers.authorization
    const token = header.split(' ')[1]

    if (!token) {
        return res.status(403).send({
            message: 'No token provided!'
        })
    }

    console.log(global.jwtkey)
    console.log(token)
    jwt.verify(token, global.jwtkey, (err, decoded) => {
        if (err) {
            return res.end(401)
        }
        req.userId = decoded.id
        next()
    })
}