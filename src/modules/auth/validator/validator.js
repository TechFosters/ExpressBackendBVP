import Joi from "joi";

export const registerSchema = Joi.object({
  userName: Joi.string().min(3).alphanum().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  role: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string(),
});
