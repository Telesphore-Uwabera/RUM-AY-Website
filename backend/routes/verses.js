const express = require('express');
const router = express.Router();

// Sample verses data
let verses = [
  {
    id: 1,
    verse: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    reference: "John 3:16",
    translation: "NIV",
    date: "2025-01-15",
    theme: "Love"
  },
  {
    id: 2,
    verse: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
    reference: "Proverbs 3:5-6",
    translation: "NIV",
    date: "2025-01-14",
    theme: "Trust"
  }
];

// GET all verses
router.get('/', (req, res) => {
  res.json(verses);
});

// GET single verse by ID
router.get('/:id', (req, res) => {
  const verse = verses.find(v => v.id === parseInt(req.params.id));
  if (!verse) {
    return res.status(404).json({ error: 'Verse not found' });
  }
  res.json(verse);
});

// GET today's verse
router.get('/today', (req, res) => {
  const today = new Date().toISOString().split('T')[0];
  const todayVerse = verses.find(v => v.date === today);
  
  if (!todayVerse) {
    return res.status(404).json({ error: 'No verse for today' });
  }
  res.json(todayVerse);
});

// GET random verse
router.get('/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * verses.length);
  res.json(verses[randomIndex]);
});

// POST new verse
router.post('/', (req, res) => {
  const { verse, reference, translation, theme } = req.body;
  
  if (!verse || !reference) {
    return res.status(400).json({ error: 'Verse and reference are required' });
  }

  const newVerse = {
    id: verses.length + 1,
    verse,
    reference,
    translation: translation || 'NIV',
    date: new Date().toISOString().split('T')[0],
    theme: theme || 'General'
  };

  verses.push(newVerse);
  res.status(201).json(newVerse);
});

// PUT update verse
router.put('/:id', (req, res) => {
  const verseIndex = verses.findIndex(v => v.id === parseInt(req.params.id));
  if (verseIndex === -1) {
    return res.status(404).json({ error: 'Verse not found' });
  }

  const { verse, reference, translation, theme } = req.body;
  verses[verseIndex] = {
    ...verses[verseIndex],
    verse: verse || verses[verseIndex].verse,
    reference: reference || verses[verseIndex].reference,
    translation: translation || verses[verseIndex].translation,
    theme: theme || verses[verseIndex].theme
  };

  res.json(verses[verseIndex]);
});

// DELETE verse
router.delete('/:id', (req, res) => {
  const verseIndex = verses.findIndex(v => v.id === parseInt(req.params.id));
  if (verseIndex === -1) {
    return res.status(404).json({ error: 'Verse not found' });
  }

  const deletedVerse = verses.splice(verseIndex, 1)[0];
  res.json({ message: 'Verse deleted successfully', verse: deletedVerse });
});

module.exports = router; 