import Joi from "joi";

const registerSchema = Joi.object({
  firstName: Joi.string().trim().required().messages({
    "string.empty": "first name is required"
  }),
  lastName: Joi.string().trim().required().messages({
    "string.empty": "last name is required"
  }),
  citizenId: Joi.string()
    .length(13)
    .pattern(/^[0-9]{13}$/)
    .required()
    .messages({
      "string.empty": "citizenId is required",
      "string.pattern.base": "citizenId must be number and contain with 13 characters"
    }),
  telephoneNumber: Joi.string()
    .length(10)
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      "string.empty": "telephone number is required",
      "string.length": "telephone number must have 10 characters"
    }),
  username: Joi.string().required().messages({ "string.empty": "username is required" }),
  password: Joi.string().alphanum().min(6).required().messages({
    "string.empty": "password is required",
    "string.alphanum": "password must contain number or alphabet",
    "string.min": "password must have at least 6 characters"
  })
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
};

export default validateRegister;
