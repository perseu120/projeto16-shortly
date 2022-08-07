import { Route } from "express";

const visitLinkRouter = Route();

visitLinkRouter.get('/users/me', getUsers);
visitLinkRouter.get('/ranking', getRanking);

export default visitLinkRouter;