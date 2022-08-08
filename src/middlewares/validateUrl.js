import schemaUrl from "../screma/urlSchema.js";

export default function validateUrl(req, res, next){
    const urlValidate = schemaUrl.validate(req.body);

    if(urlValidate.error){
        res.status(422).send(`${urlValidate.error.message}`);
        return;
    }

    next();
}
    