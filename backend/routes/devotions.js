import express from 'express';
import { 
  getAllDevotions, 
  getDevotionById, 
  createDevotion, 
  updateDevotion, 
  deleteDevotion,
  getDailyDevotion 
} from '../controllers/devotionsController.js';

const router = express.Router();

// GET all devotions
router.get('/', getAllDevotions);

// GET daily devotion
router.get('/daily', getDailyDevotion);

// GET single devotion by ID
router.get('/:id', getDevotionById);

// POST create new devotion
router.post('/', createDevotion);

// PUT update devotion
router.put('/:id', updateDevotion);

// DELETE devotion
router.delete('/:id', deleteDevotion);

export default router;
