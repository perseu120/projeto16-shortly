import Joi from "joi";

const schemaUserLogin = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

export default schemaUserLogin;