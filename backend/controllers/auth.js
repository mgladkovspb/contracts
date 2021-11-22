const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../data/user')

const generateAccessToken = (id, name) => {
    const payload = {
        id,
        name
    }
    console.log(payload)
    return jwt.sign(payload, 'jwtkey', { expiresIn: '1h' })
}


async function signin(req, res) {
    console.log(req.headers)
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username }).lean().exec()
        if(!user) {
            return res.status(400).json({ message: 'Пользователь не найден' })
        }
        const validPassword = bcrypt.compareSync(password, user.password)
        if(!validPassword) {
            return res.json({ message: 'Неверный пароль' })
        }
        const token = generateAccessToken(user._id.toString(), user.username)
        res.json({ id: user._id, token })
    } catch (error) {
        res.status(500).json({})
        console.log(error)
    }
}

module.exports = {
    signin,
}