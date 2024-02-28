const LoginModel = require("../models/login");
const RegisterModel = require("../models/register");

const loginContoller = async(request, reply) => {
    const { mobile, password} = request.body
    if (!/^\d{10}$/.test(mobile)) {
        return reply.code(409).send({ error: 'Mobile must contain exactly 10 digits' });
    }
    const existingUser = await RegisterModel.findOne({mobile})
    if(!existingUser){
        return reply.code(409).send({error: `Number '${mobile}' is not registered`})
    }
    const loginData = await LoginModel.findOne({mobile})
    if(loginData){
        return reply.code(200).send({message: 'Login Successsfully!'})
    }
    const createLogin = await LoginModel.create({mobile, password})
    return reply.code(201).send({message:"Login Successfully!",createLogin})
}
module.exports = loginContoller