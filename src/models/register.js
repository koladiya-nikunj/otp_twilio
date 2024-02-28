const { Schema, model } = require("mongoose");

const registerSchema = new Schema({
    name: String,
    email: String,
    mobile: Number,
    password: String,
})

const RegisterModel = model('register', registerSchema)
module.exports = RegisterModel