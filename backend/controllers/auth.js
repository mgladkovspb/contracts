const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../data/user')

const generateAccessToken = (id, name) => {
    const payload = {
        id,
        name
    }
    console.log(global.jwtkey)
    return jwt.sign(payload, '1df60c852f59ef1865f1382a9efce836c50d10abe943b10fc4d6a914c107c8a25df6d340935f1d0effcfab31d2b7138f'/*global.jwtkey*/, { expiresIn: '3h' })
}

async function signin(req, res) {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username }).lean().exec()
        if(!user) {
            return res.status(400).json({ username: true, message: 'Пользователь не найден' })
        }
        const validPassword = bcrypt.compareSync(password, user.password)
        if(!validPassword) {
            return res.status(400).json({ password: true, message: 'Неверный пароль' })
        }
        const token = generateAccessToken(user._id.toString(), user.username)
        res.json({ id: user._id, token })
    } catch (error) {
        res.status(500).json({})
        console.log(error)
    }
}

async function verify(req, res) {
    if(!req.user) {
        return res.status(403).json({ errors: 'Token expired' })
    }

    try {
        const user = await User.findById(mongoose.Types.ObjectId(req.user.id))
            .lean().exec()
        if(!user) {
            return res.status(400).json({ errors: 'Пользователь не найден' })
        }
        res.json(req.user)
    } catch (error) {
        res.status(500).json({})
        console.log(error)
    }
}

module.exports = {
    signin,
    verify
}