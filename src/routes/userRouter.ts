import { Router } from "express";
import { register,login } from "../controllers/userController";
import { userSchema } from "../schemas/userSchema";
import { validateSchema } from "../middlewares/validateSchema";

const authRouter = Router();

authRouter.post("/sign-up", validateSchema(userSchema), register);
authRouter.post("/sign-in", validateSchema(userSchema), login);

export default authRouter;