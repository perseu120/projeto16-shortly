import express,{json} from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import rentalsRouter from './src/routes/rentalsRouter.js'


dotenv.config();

const server=express();
server.use(cors());
server.use(json());


server.use(rentalsRouter);

server.listen(process.env.PORT, ()=> console.log(`Servidor rodando na porta ${process.env.PORT}`));