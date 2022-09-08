
import { Router } from "express";

import userRouter from "./userRouter";
import credentialsRouter from "./credentialRouter";

const router = Router();

router.use(userRouter);
router.use(credentialsRouter);

export default router;