const express = require('express');
const router = express.Router();

// Sample devotions data
let devotions = [
  {
    id: 1,
    title: "Walking in Faith",
    content: "Today's devotion focuses on the importance of walking in faith daily. Trust in the Lord with all your heart and lean not on your own understanding.",
    scripture: "Proverbs 3:5-6",
    author: "Pastor John",
    date: "2025-01-15",
    category: "Faith"
  },
  {
    id: 2,
    title: "Service to Others",
    content: "Jesus showed us the way of service. Let us follow His example and serve others with love and humility.",
    scripture: "Mark 10:45",
    author: "Sister Mary",
    date: "2025-01-14",
    category: "Service"
  }
];

// GET all devotions
router.get('/', (req, res) => {
  res.json(devotions);
});

// GET single devotion by ID
router.get('/:id', (req, res) => {
  const devotion = devotions.find(d => d.id === parseInt(req.params.id));
  if (!devotion) {
    return res.status(404).json({ error: 'Devotion not found' });
  }
  res.json(devotion);
});

// GET today's devotion
router.get('/today', (req, res) => {
  const today = new Date().toISOString().split('T')[0];
  const todayDevotion = devotions.find(d => d.date === today);
  
  if (!todayDevotion) {
    return res.status(404).json({ error: 'No devotion for today' });
  }
  res.json(todayDevotion);
});

// POST new devotion
router.post('/', (req, res) => {
  const { title, content, scripture, author, category } = req.body;
  
  if (!title || !content || !scripture) {
    return res.status(400).json({ error: 'Title, content, and scripture are required' });
  }

  const newDevotion = {
    id: devotions.length + 1,
    title,
    content,
    scripture,
    author: author || 'AY Leadership',
    date: new Date().toISOString().split('T')[0],
    category: category || 'General'
  };

  devotions.push(newDevotion);
  res.status(201).json(newDevotion);
});

// PUT update devotion
router.put('/:id', (req, res) => {
  const devotionIndex = devotions.findIndex(d => d.id === parseInt(req.params.id));
  if (devotionIndex === -1) {
    return res.status(404).json({ error: 'Devotion not found' });
  }

  const { title, content, scripture, author, category } = req.body;
  devotions[devotionIndex] = {
    ...devotions[devotionIndex],
    title: title || devotions[devotionIndex].title,
    content: content || devotions[devotionIndex].content,
    scripture: scripture || devotions[devotionIndex].scripture,
    author: author || devotions[devotionIndex].author,
    category: category || devotions[devotionIndex].category
  };

  res.json(devotions[devotionIndex]);
});

// DELETE devotion
router.delete('/:id', (req, res) => {
  const devotionIndex = devotions.findIndex(d => d.id === parseInt(req.params.id));
  if (devotionIndex === -1) {
    return res.status(404).json({ error: 'Devotion not found' });
  }

  const deletedDevotion = devotions.splice(devotionIndex, 1)[0];
  res.json({ message: 'Devotion deleted successfully', devotion: deletedDevotion });
});

module.exports = router; 