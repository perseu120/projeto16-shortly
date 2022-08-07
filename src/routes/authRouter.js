import { Router } from "express";
import { setRegistration, setLogin } from "../controllers/authController";

const authRouter = Router();

authRouter.post('/signup', setRegistration);

authRouter.post('/signin', setLogin);

export default authRouter;
