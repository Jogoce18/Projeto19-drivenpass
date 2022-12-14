import Joi from "joi";
import { cardsData } from "../services/cardsService";
export const cardSchema = Joi.object<cardsData>({
  title: Joi.string().required(),
  number: Joi.string().required(),
  holder: Joi.string().required(),
  expiry: Joi.string().length(5).required(),
  cvv: Joi.string().length(3).required(),
  password: Joi.string().required(),
  isVirtual: Joi.boolean().required(),
  type: Joi.string().valid("CREDIT", "DEBIT", "HYBRID").required(),
});
