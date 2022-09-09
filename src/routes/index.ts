
import { Router } from "express";

import userRouter from "./userRouter";
import credentialsRouter from "./credentialRouter";
import notesRouter from "./notesRouter";
import cardsRouter from "./cardsRouter";
import wifiRouter from "./wifiRouter";
import documentsRouter from "./documentsRouter";


const router = Router();

router.use(userRouter);
router.use(credentialsRouter);
router.use(notesRouter);
router.use(cardsRouter);
router.use(wifiRouter);
router.use(documentsRouter);


export default router;