import { Router } from "express";

import { validateJWT } from "../middlewares/validateJWT";
import { create,getDocumentUser,getDocument,deleteDocument } from "../controllers/documentsController";

import { validateSchema } from "../middlewares/validateSchema";
import { documentsSchema } from "../schemas/documentsSchemas";

const documentsRouter = Router();

documentsRouter.post("/documents",validateSchema(documentsSchema),validateJWT,create);

documentsRouter.get("/documents",validateJWT,getDocumentUser);

documentsRouter.get("/documents/:id", validateJWT,getDocument);

documentsRouter.delete("/documents/:id",validateJWT,deleteDocument);

export default documentsRouter;
