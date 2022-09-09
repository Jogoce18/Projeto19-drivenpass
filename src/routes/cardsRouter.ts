import { Router } from "express";

import { validateJWT } from "../middlewares/validateJWT";
import { create,getCardsUser,getCard,deleteCard } from "../controllers/cardsController";

import { cardSchema } from './../schemas/cardsSchemas';
import { validateSchema } from "../middlewares/validateSchema";


const cardsRouter = Router();

cardsRouter.post("/cards",validateJWT,validateSchema(cardSchema),create);

cardsRouter.get("/cards",validateJWT,getCardsUser);

cardsRouter.get("/card/:id",validateJWT,getCard);

cardsRouter.delete("/cards/:id",validateJWT,deleteCard);

export default cardsRouter;
