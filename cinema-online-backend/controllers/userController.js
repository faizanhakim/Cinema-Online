// get all required modules
const User = require("../models/user")
const jwt = require("jsonwebtoken")
require("dotenv").config()

function createToken(_id, userName) {
    // PAYLOAD - SECRET - OPTIONS
    return jwt.sign({ _id, userName }, process.env.SECRET, { expiresIn: '1d' })
}


// login user
const loginUser = async (req, res) => {
    const { identification, password } = req.body

    try {
        const user = await User.login(identification, password)
        const token = createToken(user._id, user.userName)
        res.status(200).json({ message: "user authenticated", token })
    }
    catch (error) {
        return res.status(400).send({ message: error.message })
    }
}


// register user
const registerUser = async (req, res) => {
    const { userName, email, password } = req.body
    try {
        const user = await User.signup(userName, email, password)
        if (user) {
            const token = createToken(user._id, user.userName)
            res.status(201).json({ message: "User registered", token })
        }
    }
    catch (error) {
        res.status(400).send({ message: error.message })
    }
}


module.exports = {
    loginUser,
    registerUser
}