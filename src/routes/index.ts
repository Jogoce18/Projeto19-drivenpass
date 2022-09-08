
import { Router } from "express";

import userRouter from "./userRouter";
import credentialsRouter from "./credentialRouter";
import notesRouter from "./notesRouter";

const router = Router();

router.use(userRouter);
router.use(credentialsRouter);
router.use(notesRouter);

export default router;