const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../data/user')

const generateAccessToken = (id, name) => {
    const payload = {
        id,
        name
    }
    return jwt.sign(payload, 'jwtkey', { expiresIn: '1h' })
}


async function signin(req, res) {
    try {
        // const { username, password } = req.body
        // const user = await User.findOne({ username })
        // if(!user) {
        //     return res.status(400).json({ message: 'Пользователь не найден' })
        // }
        // const validPassword = bcrypt.compareSync(password, user.password)
        // if(!validPassword) {
        //     return res.json({ message: 'Неверный пароль' })
        // }
        // const token = generateAccessToken(user.userId, user.username)
        // console.log({ id: user._id, token })
        // return res.json({ id: user.userId, token })
        res.json({})
    } catch (error) {
        res.status(500).json({})
        console.log(error)
    }
}

module.exports = {
    signin,
}