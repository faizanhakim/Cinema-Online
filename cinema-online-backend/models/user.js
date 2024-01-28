// get required frameworks
const mongoose = require("mongoose")
const bycrypt = require("bcrypt")


// configure model schema
const Schema = mongoose.Schema

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    passwordHash: {
        type: String
    },

    salt: {
        type: String
    }
})


userSchema.statics.signup = async function (userName, email, password) {

    //check if username exists
    const userExists = await this.findOne({ "userName": userName })
    if (userExists)
        throw Error("Username already in use")

    //check if email exists
    const emailExists = await this.findOne({ "email": email })
    if (emailExists)
        throw Error("Email already in use")

    //generate salt for user password
    const salt = await bycrypt.genSalt(15)
    const hash = await bycrypt.hash(password, salt)

    const userDocument = { "userName": userName, "email": email, "passwordHash": hash, "salt": salt }

    try {
        const user = await this.create(userDocument)
        return user
    }
    catch {
        throw Error("Registeration failed")
    }
}

userSchema.statics.login = async function (identification, password) {

    let user = null

    // check if user needs to be fetched using username or email
    if (String(identification).includes('@')) {
        user = await this.findOne({ "email": identification })
    }
    else {
        user = await this.findOne({ "userName": identification })
    }

    // if not user found
    if (!user)
        throw Error("Incorrect Credentials")

    const match = await bycrypt.compare(password, user.passwordHash)

    if (!match)
        throw Error("Incorrect Credentials")

    return user
}

module.exports = mongoose.model("User", userSchema)
