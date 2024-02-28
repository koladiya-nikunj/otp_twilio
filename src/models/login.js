const { Schema, model } = require("mongoose");

const loginSchema = new Schema({
    mobile: Number,
    password: String
})

const LoginModel = model('login', loginSchema)
module.exports = LoginModel