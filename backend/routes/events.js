const express = require('express');
const router = express.Router();

// Sample events data (in a real app, this would come from a database)
let events = [
  {
    id: 1,
    title: "Pathfinder Day 2025",
    description: "Making a difference in our communities through service and love.",
    date: "2025-03-15",
    time: "09:00",
    location: "Kigali Convention Center",
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/mdC4yDFsmc.png",
    category: "Pathfinder"
  },
  {
    id: 2,
    title: "Adventures Day 2025",
    description: "Making a difference in our communities through service and love.",
    date: "2025-04-20",
    time: "10:00",
    location: "Adventist University of Central Africa",
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/mvBaWBpP7z.png",
    category: "Adventures"
  }
];

// GET all events
router.get('/', (req, res) => {
  res.json(events);
});

// GET single event by ID
router.get('/:id', (req, res) => {
  const event = events.find(e => e.id === parseInt(req.params.id));
  if (!event) {
    return res.status(404).json({ error: 'Event not found' });
  }
  res.json(event);
});

// POST new event
router.post('/', (req, res) => {
  const { title, description, date, time, location, image, category } = req.body;
  
  if (!title || !description || !date) {
    return res.status(400).json({ error: 'Title, description, and date are required' });
  }

  const newEvent = {
    id: events.length + 1,
    title,
    description,
    date,
    time: time || '',
    location: location || '',
    image: image || '',
    category: category || 'General'
  };

  events.push(newEvent);
  res.status(201).json(newEvent);
});

// PUT update event
router.put('/:id', (req, res) => {
  const eventIndex = events.findIndex(e => e.id === parseInt(req.params.id));
  if (eventIndex === -1) {
    return res.status(404).json({ error: 'Event not found' });
  }

  const { title, description, date, time, location, image, category } = req.body;
  events[eventIndex] = {
    ...events[eventIndex],
    title: title || events[eventIndex].title,
    description: description || events[eventIndex].description,
    date: date || events[eventIndex].date,
    time: time || events[eventIndex].time,
    location: location || events[eventIndex].location,
    image: image || events[eventIndex].image,
    category: category || events[eventIndex].category
  };

  res.json(events[eventIndex]);
});

// DELETE event
router.delete('/:id', (req, res) => {
  const eventIndex = events.findIndex(e => e.id === parseInt(req.params.id));
  if (eventIndex === -1) {
    return res.status(404).json({ error: 'Event not found' });
  }

  const deletedEvent = events.splice(eventIndex, 1)[0];
  res.json({ message: 'Event deleted successfully', event: deletedEvent });
});

module.exports = router; 