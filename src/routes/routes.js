const loginContoller = require("../controllers/loginController")
const otpController = require("../controllers/otpController")
const registerController = require("../controllers/registerController")

const routes = [
    {
        method: 'POST',
        url: '/login',
        handler: loginContoller
    },
    {
        method: 'POST',
        url: '/register',
        handler: registerController
    },
    {
        method: 'POST',
        url: '/register/otp',
        handler: otpController
    }
]
module.exports = routes