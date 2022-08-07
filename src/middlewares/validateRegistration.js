import schemaUserRegistre from "../screma/userRegistreSchema.js";

export default function validateRegistration(req, res, next){

    const userValidate = schemaUserRegistre.validate(req.body);

    if(userValidate.error){

        res.status(422).send(`${userValidate.error.message}`);
        return;
    }

    next();
}