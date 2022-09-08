import Joi from 'joi';

export const notesSchema = Joi.object({
  title: Joi.string().max(50).required(),
  content: Joi.string().max(1000).required(),
})