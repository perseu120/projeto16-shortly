import express,{json} from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import authRouter from './src/routes/authRouter.js';
import urlRouter from './src/routes/urlRouter.js'
import visitLinkRouter from './src/routes/visitLinkRouter.js';


dotenv.config();

const server=express();
server.use(cors());
server.use(json());


server.use(authRouter);
server.use(urlRouter);
server.use(visitLinkRouter);

server.listen(process.env.PORT, ()=> console.log(`Servidor rodando na porta ${process.env.PORT}`));