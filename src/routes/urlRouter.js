import { Router } from "express";
import {setShortenLink, getUrlId, getOpenShortUrl, deleteUrl } from '../controllers/urlController.js'

const urlRouter = Router();

urlRouter.post('/urls/shorten', setShortenLink);

urlRouter.get('/urls/:id', getUrlId);

urlRouter.get('/urls/open/:shortUrl', getOpenShortUrl);

urlRouter.delete('/urls/:id', deleteUrl);

export default urlRouter;