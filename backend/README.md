# AY Rwanda Backend API

This is the backend API for the AY Rwanda website, built with Node.js and Express.

## Features

- **Events Management**: CRUD operations for events
- **Announcements**: Manage announcements and updates
- **Devotions**: Daily devotions and spiritual content
- **Verses**: Bible verses and daily inspiration

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create environment file:**
   Create a `.env` file in the backend directory with:
   ```
   PORT=5000
   NODE_ENV=development
   CORS_ORIGIN=http://localhost:3000
   ```

3. **Run the server:**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

### Events
- `GET /api/events` - Get all events
- `GET /api/events/:id` - Get single event
- `POST /api/events` - Create new event
- `PUT /api/events/:id` - Update event
- `DELETE /api/events/:id` - Delete event

### Announcements
- `GET /api/announcements` - Get all announcements
- `GET /api/announcements/:id` - Get single announcement
- `POST /api/announcements` - Create new announcement
- `PUT /api/announcements/:id` - Update announcement
- `DELETE /api/announcements/:id` - Delete announcement

### Devotions
- `GET /api/devotions` - Get all devotions
- `GET /api/devotions/:id` - Get single devotion
- `GET /api/devotions/today` - Get today's devotion
- `POST /api/devotions` - Create new devotion
- `PUT /api/devotions/:id` - Update devotion
- `DELETE /api/devotions/:id` - Delete devotion

### Verses
- `GET /api/verses` - Get all verses
- `GET /api/verses/:id` - Get single verse
- `GET /api/verses/today` - Get today's verse
- `GET /api/verses/random` - Get random verse
- `POST /api/verses` - Create new verse
- `PUT /api/verses/:id` - Update verse
- `DELETE /api/verses/:id` - Delete verse

## Project Structure

```
backend/
├── routes/          # API route handlers
├── controllers/     # Business logic
├── models/          # Data models
├── middleware/      # Custom middleware
├── config/          # Configuration files
├── server.js        # Main server file
└── package.json     # Dependencies
```

## Development

The server runs on port 5000 by default. Make sure your frontend is configured to make API calls to `http://localhost:5000`. 