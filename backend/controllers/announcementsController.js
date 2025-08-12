// Sample data - In production, this would come from a database
let announcements = [
  {
    id: 1,
    title: "Important Update: AY Meeting Schedule",
    content: "Due to upcoming events, our regular AY meetings will be rescheduled. Please check the new schedule posted in the church bulletin.",
    priority: "high",
    author: "AY Leadership Team",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 2,
    title: "Youth Bible Study Registration Open",
    content: "Registration for our new youth Bible study program is now open. Limited spots available. Contact the AY office to register.",
    priority: "medium",
    author: "AY Education Committee",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 3,
    title: "Community Service Opportunity",
    content: "Join us this Saturday for community service at the local orphanage. We need volunteers for various activities.",
    priority: "normal",
    author: "AY Service Committee",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// Get all announcements
export const getAllAnnouncements = async (req, res) => {
  try {
    res.json({
      success: true,
      count: announcements.length,
      data: announcements
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Get single announcement by ID
export const getAnnouncementById = async (req, res) => {
  try {
    const announcement = announcements.find(a => a.id === parseInt(req.params.id));
    
    if (!announcement) {
      return res.status(404).json({
        success: false,
        error: 'Announcement not found'
      });
    }

    res.json({
      success: true,
      data: announcement
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Create new announcement
export const createAnnouncement = async (req, res) => {
  try {
    const { title, content, priority, author } = req.body;

    if (!title || !content || !author) {
      return res.status(400).json({
        success: false,
        error: 'Please provide title, content, and author'
      });
    }

    const newAnnouncement = {
      id: announcements.length + 1,
      title,
      content,
      priority: priority || 'normal',
      author,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    announcements.push(newAnnouncement);

    res.status(201).json({
      success: true,
      data: newAnnouncement
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Update announcement
export const updateAnnouncement = async (req, res) => {
  try {
    const announcementIndex = announcements.findIndex(a => a.id === parseInt(req.params.id));
    
    if (announcementIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Announcement not found'
      });
    }

    const { title, content, priority, author } = req.body;

    announcements[announcementIndex] = {
      ...announcements[announcementIndex],
      title: title || announcements[announcementIndex].title,
      content: content || announcements[announcementIndex].content,
      priority: priority || announcements[announcementIndex].priority,
      author: author || announcements[announcementIndex].author,
      updatedAt: new Date().toISOString()
    };

    res.json({
      success: true,
      data: announcements[announcementIndex]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Delete announcement
export const deleteAnnouncement = async (req, res) => {
  try {
    const announcementIndex = announcements.findIndex(a => a.id === parseInt(req.params.id));
    
    if (announcementIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Announcement not found'
      });
    }

    const deletedAnnouncement = announcements.splice(announcementIndex, 1)[0];

    res.json({
      success: true,
      data: deletedAnnouncement
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};
