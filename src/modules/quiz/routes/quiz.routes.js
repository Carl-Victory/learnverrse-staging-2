import { Router } from 'express';
import { getQuizzesByCourse, getQuizzesBySection, getQuizById, createQuiz, updateQuiz, deleteQuiz } from '../controllers/quiz.controller.js';
import passport from 'passport';

const router = Router();

// Public routes
router.get('/course/:courseId', getQuizzesByCourse);
router.get('/section/:sectionId', getQuizzesBySection);
router.get('/:quizId', getQuizById);

// Protected routes requiring authentication
router.use(passport.authenticate('jwt', { session: false }));
router.post('/', createQuiz);
router.put('/:quizId', updateQuiz);
router.delete('/:quizId', deleteQuiz);

export default router;
