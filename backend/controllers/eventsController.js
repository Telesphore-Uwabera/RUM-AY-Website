// Sample data - In production, this would come from a database
let events = [
  {
    id: 1,
    title: "AY Summer Camp",
    description: "A transformative week of adventure, worship, and friendship at the stunning Lake Kivu. Connect with nature and discover life-changing spiritual experiences.",
    date: "2025-01-24",
    location: "Gisenyi-Rubavu",
    tags: ["Swimming", "Worship", "Camp-Fires"],
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2089&q=80",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 2,
    title: "AY Awarding Ceremony",
    description: "Celebrating the achievements and dedication of our youth members. Join us for an evening of recognition and inspiration.",
    date: "2025-02-02",
    location: "Kigali-Rwanda",
    tags: ["Recognition", "Celebration", "Inspiration"],
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 3,
    title: "AY Music Class",
    description: "Learn to worship through music. Develop your musical talents and contribute to our church services.",
    date: "2025-01-21",
    location: "Kigali-Rwanda",
    tags: ["Music", "Worship", "Learning"],
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// Get all events
export const getAllEvents = async (req, res) => {
  try {
    res.json({
      success: true,
      count: events.length,
      data: events
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Get single event by ID
export const getEventById = async (req, res) => {
  try {
    const event = events.find(e => e.id === parseInt(req.params.id));
    
    if (!event) {
      return res.status(404).json({
        success: false,
        error: 'Event not found'
      });
    }

    res.json({
      success: true,
      data: event
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Create new event
export const createEvent = async (req, res) => {
  try {
    const { title, description, date, location, tags, image } = req.body;

    if (!title || !description || !date || !location) {
      return res.status(400).json({
        success: false,
        error: 'Please provide title, description, date, and location'
      });
    }

    const newEvent = {
      id: events.length + 1,
      title,
      description,
      date,
      location,
      tags: tags || [],
      image: image || '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    events.push(newEvent);

    res.status(201).json({
      success: true,
      data: newEvent
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Update event
export const updateEvent = async (req, res) => {
  try {
    const eventIndex = events.findIndex(e => e.id === parseInt(req.params.id));
    
    if (eventIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Event not found'
      });
    }

    const { title, description, date, location, tags, image } = req.body;

    events[eventIndex] = {
      ...events[eventIndex],
      title: title || events[eventIndex].title,
      description: description || events[eventIndex].description,
      date: date || events[eventIndex].date,
      location: location || events[eventIndex].location,
      tags: tags || events[eventIndex].tags,
      image: image || events[eventIndex].image,
      updatedAt: new Date().toISOString()
    };

    res.json({
      success: true,
      data: events[eventIndex]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Delete event
export const deleteEvent = async (req, res) => {
  try {
    const eventIndex = events.findIndex(e => e.id === parseInt(req.params.id));
    
    if (eventIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Event not found'
      });
    }

    const deletedEvent = events.splice(eventIndex, 1)[0];

    res.json({
      success: true,
      data: deletedEvent
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};
