import { Router } from "express";

import { validateJWT } from "../middlewares/validateJWT";
import { create,getCredentialsUser,getCredential,deleteCredential } from "../controllers/credentialController";

import { validateSchema } from "../middlewares/validateSchema";
import { credentialSchema } from "../schemas/credentialSchema";

const credentialsRouter = Router();

credentialsRouter.post('/credential',validateSchema(credentialSchema),validateJWT,create );

credentialsRouter.get('/credentials',validateJWT,getCredentialsUser);

credentialsRouter.get('/credentials/:id',validateJWT,getCredential);

credentialsRouter.delete('/credentials/:id',validateJWT,deleteCredential);

export default credentialsRouter;