import express from 'express';
import {
  getAllCouncilMembers,
  addCouncilMember,
  editCouncilMember,
  removeCouncilMember,
} from '../contolllers/councilMember.js';
import { councilMemberDataValidation, councilMemberIdValidation } from '../utils/validation/councilMemberValidationRules.js';

const router = express.Router();

router.get('/', getAllCouncilMembers);
router.post('/', councilMemberDataValidation, addCouncilMember);
router.patch('/:id', councilMemberIdValidation, councilMemberDataValidation, editCouncilMember);
router.delete('/:id', councilMemberDataValidation, removeCouncilMember);

export default router;
