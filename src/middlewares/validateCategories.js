import joi from 'joi';


export default function validateCategories(req, res){


    const schemaName = joi.object({
        name: joi.string().required()
    })

    const userValidate = schemaName.validate(req.body);

    if(userValidate.error){
        res.status(400).send("nome de categoria invalido");
        return;
    }

    next();
}