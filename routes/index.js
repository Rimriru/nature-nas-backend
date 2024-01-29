import express from 'express';
import councilMembersRoutes from './councilMember.js';
import youngScientistsRoutes from './youngScientist.js';
import NotFoundError from '../errors/NotFoundError.js';

const router = express.Router();

router.use('/council-members', councilMembersRoutes);
router.use('/junior-science-council', youngScientistsRoutes);

router.use((req, res, next) => {
  next(new NotFoundError('Такой страницы не существует'));
});

export default router;
