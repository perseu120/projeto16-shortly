import { Router } from "express";
import {setShortenLink, getUrlId, getOpenShortUrl, deleteUrl } from '../controllers/urlController.js'
import authorizationToken from "../middlewares/authorizationToken.js";
import validateUrl from "../middlewares/validateUrl.js";

const urlRouter = Router();

urlRouter.post('/urls/shorten',validateUrl, authorizationToken, setShortenLink);

urlRouter.get('/urls/:id', getUrlId);

urlRouter.get('/urls/open/:shortUrl', getOpenShortUrl);

urlRouter.delete('/urls/:id',authorizationToken, deleteUrl);

export default urlRouter;