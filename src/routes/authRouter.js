import { Router } from "express";
import { setRegistration, setLogin } from "../controllers/authController.js";
import validateLogin from "../middlewares/validateLogin.js";
import validateRegistration from "../middlewares/validateRegistration.js"

const authRouter = Router();

authRouter.post('/signup',validateRegistration, setRegistration);

authRouter.post('/signin',validateLogin, setLogin);

export default authRouter;
