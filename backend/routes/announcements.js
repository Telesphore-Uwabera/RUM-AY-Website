import express from 'express';
import { 
  getAllAnnouncements, 
  getAnnouncementById, 
  createAnnouncement, 
  updateAnnouncement, 
  deleteAnnouncement 
} from '../controllers/announcementsController.js';

const router = express.Router();

// GET all announcements
router.get('/', getAllAnnouncements);

// GET single announcement by ID
router.get('/:id', getAnnouncementById);

// POST create new announcement
router.post('/', createAnnouncement);

// PUT update announcement
router.put('/:id', updateAnnouncement);

// DELETE announcement
router.delete('/:id', deleteAnnouncement);

export default router;
