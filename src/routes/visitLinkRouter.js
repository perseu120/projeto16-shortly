import { Router } from "express";
import {getUsers, getRanking} from '../controllers/visitLinkController.js';
import authorizationToken from '../middlewares/authorizationToken.js';

const visitLinkRouter = Router();

visitLinkRouter.get('/users/me', authorizationToken, getUsers);
visitLinkRouter.get('/ranking', getRanking);

export default visitLinkRouter;