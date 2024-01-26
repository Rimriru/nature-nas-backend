import express from 'express';
import councilMemberRoutes from './councilMember.js';
import NotFoundError from '../errors/NotFoundError.js';

const router = express.Router();

router.use('/council-members', councilMemberRoutes);

router.use((req, res, next) => {
  next(new NotFoundError('Такой страницы не существует'));
});

export default router;
