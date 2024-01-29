import YoungScientist from '../models/youngScientist.js';
import NotFoundError from '../errors/NotFoundError.js';
import { notFoundErrorMessage } from '../errors/errorMessages.js';

const getAllYoungScientists = (req, res, next) => {
  YoungScientist.find({})
    .orFail(new NotFoundError(notFoundErrorMessage))
    .then((youngScientists) => res.send(youngScientists))
    .catch(next);
};

const addYoungScientist = (req, res, next) => {
  const youngScientistParams = req.body;
  const photoPath = req.file ? req.file.path : null;
  YoungScientist.create({ ...youngScientistParams, photo: photoPath })
    .then((newYoungScientist) => res.send(newYoungScientist))
    .catch(next);
};

const editYoungScientist = (req, res, next) => {
  const youngScientistParams = req.body;
  const { id } = req.params;
  const photoPath = req.file ? req.file.path : null;
  YoungScientist.findByIdAndUpdate(id, { ...youngScientistParams, photo: photoPath }, { new: true })
    .orFail(new NotFoundError(notFoundErrorMessage))
    .then((updatedYoungScientist) => res.send(updatedYoungScientist))
    .catch(next);
};

const removeYoungScientist = (req, res, next) => {
  const { id } = req.params;
  YoungScientist.findByIdAndRemove(id)
    .orFail(new NotFoundError(notFoundErrorMessage))
    .then(() => res.send({ message: 'Участник удален' }))
    .catch(next);
};

export {
  getAllYoungScientists,
  addYoungScientist,
  editYoungScientist,
  removeYoungScientist,
};
