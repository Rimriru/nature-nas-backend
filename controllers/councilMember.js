import CouncilMember from '../models/councilMember.js';
import NotFoundError from '../errors/NotFoundError.js';
import { notFoundErrorMessage } from '../errors/errorMessages.js';

const getAllCouncilMembers = (req, res, next) => {
  CouncilMember.find({})
    .orFail(new NotFoundError(notFoundErrorMessage))
    .then((members) => res.send(members))
    .catch(next);
};

const addCouncilMember = (req, res, next) => {
  const { name, jobPosition } = req.body;
  CouncilMember.create({ name, jobPosition })
    .then((newCouncilMember) => res.send(newCouncilMember))
    .catch(next);
};

const editCouncilMember = (req, res, next) => {
  const { name, jobPosition } = req.body;
  const { id } = req.params;
  CouncilMember.findByIdAndUpdate(id, { name, jobPosition }, { new: true })
    .orFail(new NotFoundError(notFoundErrorMessage))
    .then((updatedMember) => res.send(updatedMember))
    .catch(next);
};

const removeCouncilMember = (req, res, next) => {
  const { id } = req.params;
  CouncilMember.findByIdAndRemove(id)
    .orFail(new NotFoundError(notFoundErrorMessage))
    .then((removedMember) => res.send(removedMember))
    .catch(next);
};

export {
  getAllCouncilMembers,
  addCouncilMember,
  editCouncilMember,
  removeCouncilMember,
};
