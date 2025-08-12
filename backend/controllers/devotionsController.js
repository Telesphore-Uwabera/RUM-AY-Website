// Sample data - In production, this would come from a database
let devotions = [
  {
    id: 1,
    title: "Faith on Fire",
    description: "Ignite your relationship with Jesus through powerful daily devotions designed specifically for young Adventists. Explore life's challenges and opportunities.",
    content: "Today's devotion focuses on how to keep your faith burning bright even in difficult times...",
    author: "AY Spiritual Team",
    date: "2025-01-12",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    category: "Daily Devotion",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 2,
    title: "Walking with God",
    description: "Learn to walk daily with God and experience His presence in every moment of your life.",
    content: "Walking with God is not just about attending church services...",
    author: "AY Spiritual Team",
    date: "2025-01-11",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    category: "Spiritual Growth",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 3,
    title: "Youth Ministry",
    description: "Discover your role in youth ministry and how to serve God effectively in your community.",
    content: "Youth ministry is not just for adults...",
    author: "AY Leadership Team",
    date: "2025-01-10",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    category: "Ministry",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// Get all devotions
export const getAllDevotions = async (req, res) => {
  try {
    res.json({
      success: true,
      count: devotions.length,
      data: devotions
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Get daily devotion
export const getDailyDevotion = async (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const dailyDevotion = devotions.find(d => d.date === today) || devotions[0];

    res.json({
      success: true,
      data: dailyDevotion
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Get single devotion by ID
export const getDevotionById = async (req, res) => {
  try {
    const devotion = devotions.find(d => d.id === parseInt(req.params.id));
    
    if (!devotion) {
      return res.status(404).json({
        success: false,
        error: 'Devotion not found'
      });
    }

    res.json({
      success: true,
      data: devotion
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Create new devotion
export const createDevotion = async (req, res) => {
  try {
    const { title, description, content, author, date, image, category } = req.body;

    if (!title || !description || !content || !author) {
      return res.status(400).json({
        success: false,
        error: 'Please provide title, description, content, and author'
      });
    }

    const newDevotion = {
      id: devotions.length + 1,
      title,
      description,
      content,
      author,
      date: date || new Date().toISOString().split('T')[0],
      image: image || '',
      category: category || 'Daily Devotion',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    devotions.push(newDevotion);

    res.status(201).json({
      success: true,
      data: newDevotion
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Update devotion
export const updateDevotion = async (req, res) => {
  try {
    const devotionIndex = devotions.findIndex(d => d.id === parseInt(req.params.id));
    
    if (devotionIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Devotion not found'
      });
    }

    const { title, description, content, author, date, image, category } = req.body;

    devotions[devotionIndex] = {
      ...devotions[devotionIndex],
      title: title || devotions[devotionIndex].title,
      description: description || devotions[devotionIndex].description,
      content: content || devotions[devotionIndex].content,
      author: author || devotions[devotionIndex].author,
      date: date || devotions[devotionIndex].date,
      image: image || devotions[devotionIndex].image,
      category: category || devotions[devotionIndex].category,
      updatedAt: new Date().toISOString()
    };

    res.json({
      success: true,
      data: devotions[devotionIndex]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Delete devotion
export const deleteDevotion = async (req, res) => {
  try {
    const devotionIndex = devotions.findIndex(d => d.id === parseInt(req.params.id));
    
    if (devotionIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Devotion not found'
      });
    }

    const deletedDevotion = devotions.splice(devotionIndex, 1)[0];

    res.json({
      success: true,
      data: deletedDevotion
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};
