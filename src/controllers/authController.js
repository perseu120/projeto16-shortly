import connection from "../database/db.js";
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

export async function setRegistration(req, res){

    const {
        name,
        email,
        password
    } = req.body;

    const {rows:result} = await connection.query('SELECT email FROM users WHERE email = $1', [email]);

    if(result){
        res.status(409).send("email já cadastrado");
        return;
    }

    const hashPassword=bcrypt.hashSync(password, 10);
    await connection.query('INSERT INTO users (name, email, senha) VALUES ($1, $2, $3)', [name, email, hashPassword ]);

    

    res.sendStatus(201);

}

export async function setLogin(req, res){


    const {
        email,
        password
    } = req.body


    const {rows:user} =  await connection.query(`SELECT * FROM users WHERE email =$1`, [email])
    console.log(user);
    if(user.length < 1){
        res.sendStatus(401);
        return;
    }

    if (bcrypt.compareSync(password, user[0].senha)) {
        const token = uuid();
        
        await connection.query('INSERT INTO sessions (token, "idUsers") VALUES ($1, $2)', [token, user[0].id ]);

        res.status(200).send(token);
    };

    console.log("tudo certo na bahia");
    
}