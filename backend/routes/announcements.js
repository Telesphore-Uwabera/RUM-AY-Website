const express = require('express');
const router = express.Router();

// Sample announcements data
let announcements = [
  {
    id: 1,
    title: "Youth Conference Registration",
    content: "Registration for the upcoming youth conference is now open. Don't miss this opportunity to connect with fellow young Adventists.",
    date: "2025-01-15",
    priority: "high",
    author: "AY Leadership"
  },
  {
    id: 2,
    title: "Bible Study Schedule Update",
    content: "Our weekly Bible study schedule has been updated. Check the new times and locations.",
    date: "2025-01-10",
    priority: "medium",
    author: "Ministry Team"
  }
];

// GET all announcements
router.get('/', (req, res) => {
  res.json(announcements);
});

// GET single announcement by ID
router.get('/:id', (req, res) => {
  const announcement = announcements.find(a => a.id === parseInt(req.params.id));
  if (!announcement) {
    return res.status(404).json({ error: 'Announcement not found' });
  }
  res.json(announcement);
});

// POST new announcement
router.post('/', (req, res) => {
  const { title, content, priority, author } = req.body;
  
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  const newAnnouncement = {
    id: announcements.length + 1,
    title,
    content,
    date: new Date().toISOString().split('T')[0],
    priority: priority || 'medium',
    author: author || 'AY Leadership'
  };

  announcements.push(newAnnouncement);
  res.status(201).json(newAnnouncement);
});

// PUT update announcement
router.put('/:id', (req, res) => {
  const announcementIndex = announcements.findIndex(a => a.id === parseInt(req.params.id));
  if (announcementIndex === -1) {
    return res.status(404).json({ error: 'Announcement not found' });
  }

  const { title, content, priority, author } = req.body;
  announcements[announcementIndex] = {
    ...announcements[announcementIndex],
    title: title || announcements[announcementIndex].title,
    content: content || announcements[announcementIndex].content,
    priority: priority || announcements[announcementIndex].priority,
    author: author || announcements[announcementIndex].author
  };

  res.json(announcements[announcementIndex]);
});

// DELETE announcement
router.delete('/:id', (req, res) => {
  const announcementIndex = announcements.findIndex(a => a.id === parseInt(req.params.id));
  if (announcementIndex === -1) {
    return res.status(404).json({ error: 'Announcement not found' });
  }

  const deletedAnnouncement = announcements.splice(announcementIndex, 1)[0];
  res.json({ message: 'Announcement deleted successfully', announcement: deletedAnnouncement });
});

module.exports = router; 