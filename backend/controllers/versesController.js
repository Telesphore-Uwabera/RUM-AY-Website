// Sample data - In production, this would come from a database
let verses = [
  {
    id: 1,
    reference: "John 3:16",
    text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    translation: "NIV",
    category: "Salvation",
    date: "2025-01-12",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 2,
    reference: "Philippians 4:13",
    text: "I can do all this through him who gives me strength.",
    translation: "NIV",
    category: "Strength",
    date: "2025-01-11",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 3,
    reference: "Jeremiah 29:11",
    text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
    translation: "NIV",
    category: "Hope",
    date: "2025-01-10",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 4,
    reference: "Psalm 119:105",
    text: "Your word is a lamp for my feet, a light on my path.",
    translation: "NIV",
    category: "Guidance",
    date: "2025-01-09",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// Get all verses
export const getAllVerses = async (req, res) => {
  try {
    res.json({
      success: true,
      count: verses.length,
      data: verses
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Get verse of the day
export const getVerseOfTheDay = async (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const verseOfTheDay = verses.find(v => v.date === today) || verses[0];

    res.json({
      success: true,
      data: verseOfTheDay
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Get single verse by ID
export const getVerseById = async (req, res) => {
  try {
    const verse = verses.find(v => v.id === parseInt(req.params.id));
    
    if (!verse) {
      return res.status(404).json({
        success: false,
        error: 'Verse not found'
      });
    }

    res.json({
      success: true,
      data: verse
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Create new verse
export const createVerse = async (req, res) => {
  try {
    const { reference, text, translation, category, date } = req.body;

    if (!reference || !text || !translation) {
      return res.status(400).json({
        success: false,
        error: 'Please provide reference, text, and translation'
      });
    }

    const newVerse = {
      id: verses.length + 1,
      reference,
      text,
      translation,
      category: category || 'General',
      date: date || new Date().toISOString().split('T')[0],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    verses.push(newVerse);

    res.status(201).json({
      success: true,
      data: newVerse
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Update verse
export const updateVerse = async (req, res) => {
  try {
    const verseIndex = verses.findIndex(v => v.id === parseInt(req.params.id));
    
    if (verseIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Verse not found'
      });
    }

    const { reference, text, translation, category, date } = req.body;

    verses[verseIndex] = {
      ...verses[verseIndex],
      reference: reference || verses[verseIndex].reference,
      text: text || verses[verseIndex].text,
      translation: translation || verses[verseIndex].translation,
      category: category || verses[verseIndex].category,
      date: date || verses[verseIndex].date,
      updatedAt: new Date().toISOString()
    };

    res.json({
      success: true,
      data: verses[verseIndex]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Delete verse
export const deleteVerse = async (req, res) => {
  try {
    const verseIndex = verses.findIndex(v => v.id === parseInt(req.params.id));
    
    if (verseIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Verse not found'
      });
    }

    const deletedVerse = verses.splice(verseIndex, 1)[0];

    res.json({
      success: true,
      data: deletedVerse
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};
