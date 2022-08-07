import express,{json} from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import authRouter from "./src/routes/authRouter.js"


dotenv.config();

const server=express();
server.use(cors());
server.use(json());


server.use(authRouter);

server.listen(process.env.PORT, ()=> console.log(`Servidor rodando na porta ${process.env.PORT}`));