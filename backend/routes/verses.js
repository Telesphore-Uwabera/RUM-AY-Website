import express from 'express';
import { 
  getAllVerses, 
  getVerseById, 
  createVerse, 
  updateVerse, 
  deleteVerse,
  getVerseOfTheDay 
} from '../controllers/versesController.js';

const router = express.Router();

// GET all verses
router.get('/', getAllVerses);

// GET verse of the day
router.get('/daily', getVerseOfTheDay);

// GET single verse by ID
router.get('/:id', getVerseById);

// POST create new verse
router.post('/', createVerse);

// PUT update verse
router.put('/:id', updateVerse);

// DELETE verse
router.delete('/:id', deleteVerse);

export default router;
