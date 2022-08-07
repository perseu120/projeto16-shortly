import Joi from 'joi';

const schemaUserRegistre = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.ref('password')
})

export default schemaUserRegistre;