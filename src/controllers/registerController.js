const registerController = async (request, reply) => {
    const accountSid = "ACe15981f3bbba52dac14be8e6740f837a";
    const authToken = "d4d741a1cf906cbea5564528a867e450";
    const verifySid = "VA08bd255ae6d104f5586198c460d2d55c";
    const client = require("twilio")(accountSid, authToken);

    const { mobile } = request.body;
    const otp = Math.floor(100000 + Math.random() * 900000);

    try {
        await client.verify.v2.services(verifySid)
            .verifications.create({ to: `+91${mobile}`, channel: "sms" });
        console.log("OTP sent successfully.");
        return reply.code(200).send({ message: "OTP sent successfully" });
    } catch (error) {
        console.error("Error sending OTP:", error);
        return reply.code(500).send({ error: "Internal Server Error" });
    }
};

module.exports = registerController;
