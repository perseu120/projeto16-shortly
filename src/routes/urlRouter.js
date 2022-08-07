import { Route } from "express";

const urlRouter = Router();

urlRouter.post('/urls/shorten', setShortenLink);

urlRouter.get('/urls/:id', getUrlId);

urlRouter.get('/urls/open/:shortUrl', getOpenShortUrl);

urlRouter.delete('/urls/:id', deleteUrl);

export default urlRouter;