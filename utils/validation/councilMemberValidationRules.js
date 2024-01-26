import { Joi, celebrate } from 'celebrate';

const councilMemberDataValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    jobPosition: Joi.string().required(),
  }),
});

const councilMemberIdValidation = celebrate({
  params: Joi.object().keys({
    id: Joi.string().required().hex().length(24),
  }),
});

export { councilMemberDataValidation, councilMemberIdValidation };
