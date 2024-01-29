import { celebrate, Joi } from 'celebrate';

const youngScientistDataValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    position: Joi.string().required(),
    email: Joi.string().email(),
    phoneNumber: Joi.string(),
    description: Joi.string(),
    photo: Joi.string(),
  }),
});

const youngScientistIdValidation = celebrate({
  params: Joi.object().keys({
    id: Joi.string().required().hex().length(24),
  }),
});

export { youngScientistDataValidation, youngScientistIdValidation };
