const RegisterModel = require("../models/register");

const otpController = async (request, reply) => {
    const accountSid = "ACe15981f3bbba52dac14be8e6740f837a";
    const authToken = "d4d741a1cf906cbea5564528a867e450";
    const verifySid = "VA08bd255ae6d104f5586198c460d2d55c";
    const client = require("twilio")(accountSid, authToken);

    const { mobile, name,email, password, otp } = request.body;

    try {
        const verification_check = await client.verify.v2.services(verifySid)
            .verificationChecks.create({ to: `+91${mobile}`, code: otp });

        if (verification_check.status === "approved") {
            const createUser = await RegisterModel.create({ mobile, email, name, password })
            console.log("Registration successful");
            return reply.code(201).send({ message: "Registration successfully!" ,createUser});
        } else {
            console.log("Invalid OTP");
            return reply.code(400).send({ error: "Invalid OTP" });
        }
    } catch (error) {
        console.error("Error verifying OTP:", error);
        return reply.code(500).send({ error: "Internal Server Error" });
    }
};

module.exports = otpController;
