import Joi from "joi";

export const documentsSchema = Joi.object({
  fullname: Joi.string().required(),
  dateEmitted: Joi.date().required(),
  dateExpires: Joi.date().required(),
  numberRef: Joi.string().required(),
  institution: Joi.string().required(),
  type: Joi.string().valid("NATIONAL_ID", "DRIVING_LICENSE").required(),
});
