const Joi = require('joi');

const feedbackValidationSchema = Joi.object({
  feedbackId: Joi.string().required(),
  email: Joi.string().email().required(),
  satisfaction_rate: Joi.string().required(),
  message: Joi.string(),
  code: Joi.number().required(),
});