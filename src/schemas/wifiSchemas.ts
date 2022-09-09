import Joi from "joi";

export const wifiSchema = Joi.object({
  title: Joi.string().required(),
  name: Joi.string().required(),
  password: Joi.string().required(),
});
