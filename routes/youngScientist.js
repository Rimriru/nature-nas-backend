import express from 'express';
import {
  getAllYoungScientists,
  addYoungScientist,
  editYoungScientist,
  removeYoungScientist,
} from '../controllers/youngScientist.js';
import { youngScientistDataValidation, youngScientistIdValidation } from '../utils/validation/youngScientistValidationRules.js';

const router = express.Router();

router.get('/', getAllYoungScientists);
router.post('/', youngScientistDataValidation, addYoungScientist);
router.patch('/:id', youngScientistIdValidation, youngScientistDataValidation, editYoungScientist);
router.delete('/:id', youngScientistIdValidation, removeYoungScientist);

export default router;
