import { Router } from "express";

import { validateJWT } from "../middlewares/validateJWT";
import { create,getWifisUser,getWifi,deleteWifi } from "../controllers/wifiController";

import { wifiSchema } from './../schemas/wifiSchemas';
import { validateSchema } from "../middlewares/validateSchema";

const wifiRouter = Router();

wifiRouter.post('/wifi',validateSchema(wifiSchema),create);

wifiRouter.get('/wifi',validateJWT,getWifisUser);

wifiRouter.get('/wifi/:wifiId',validateJWT,getWifi);

wifiRouter.delete('/wifi/:wifiId',validateJWT,deleteWifi);

export default wifiRouter;
