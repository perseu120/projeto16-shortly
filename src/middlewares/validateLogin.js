import schemaUserLogin from "../screma/userLoginSchema.js";

export default function validateLogin(req, res, next){

    const userValidate = schemaUserLogin.validate(req.body);

    if(userValidate.error){
        res.status(422).send(`${userValidate.error.message}`);
    }

    next();
}