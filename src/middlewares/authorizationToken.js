import connection from "../database/db.js";

export default async function authorizationToken(req,res,next){

    const { authorization } = req.headers;

    if(!authorization){
        res.sendStatus(401);
        return;
    }

    const token = authorization?.replace('Bearer ', '');

    const {rows: user} = await connection.query('SELECT * FROM sessions WHERE token = $1', [token]);

    if(user.length < 1){
        
        res.status(401).send("token invalido ou fora da validade")
        return;
    }
    
    res.locals.idUsers = user[0].idUsers;
    
    next();
}