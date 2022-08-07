import { Router } from "express";
import {getUsers, getRanking} from '../controllers/visitLinkController.js'

const visitLinkRouter = Router();

visitLinkRouter.get('/users/me', getUsers);
visitLinkRouter.get('/ranking', getRanking);

export default visitLinkRouter;