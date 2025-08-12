# AY Rwanda Backend API

This is the backend API for the AY Rwanda Website, providing RESTful endpoints for managing events, announcements, devotions, and Bible verses.

## Features

- **RESTful API** with Express.js
- **CRUD operations** for all resources
- **CORS enabled** for frontend communication
- **Security middleware** (Helmet)
- **Request logging** (Morgan)
- **Environment configuration** support
- **Sample data** for development and testing

## API Endpoints

### Events
- `GET /api/events` - Get all events
- `GET /api/events/:id` - Get event by ID
- `POST /api/events` - Create new event
- `PUT /api/events/:id` - Update event
- `DELETE /api/events/:id` - Delete event

### Announcements
- `GET /api/announcements` - Get all announcements
- `GET /api/announcements/:id` - Get announcement by ID
- `POST /api/announcements` - Create new announcement
- `PUT /api/announcements/:id` - Update announcement
- `DELETE /api/announcements/:id` - Delete announcement

### Devotions
- `GET /api/devotions` - Get all devotions
- `GET /api/devotions/daily` - Get daily devotion
- `GET /api/devotions/:id` - Get devotion by ID
- `POST /api/devotions` - Create new devotion
- `PUT /api/devotions/:id` - Update devotion
- `DELETE /api/devotions/:id` - Delete devotion

### Verses
- `GET /api/verses` - Get all verses
- `GET /api/verses/daily` - Get verse of the day
- `GET /api/verses/:id` - Get verse by ID
- `POST /api/verses` - Create new verse
- `PUT /api/verses/:id` - Update verse
- `DELETE /api/verses/:id` - Delete verse

### Health Check
- `GET /api/health` - API health status

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create environment file:**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` with your configuration:
   ```env
   PORT=5000
   NODE_ENV=development
   CORS_ORIGIN=http://localhost:3000
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **API will be available at:**
   http://localhost:5000

## Development

### Running the Server
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

### Project Structure
```
backend/
├── config/           # Configuration files
├── controllers/      # Business logic
├── middleware/       # Custom middleware
├── models/           # Data models
├── routes/           # API route handlers
├── server.js         # Main server file
├── package.json      # Dependencies
└── README.md         # This file
```

## Data Models

### Event
```json
{
  "id": 1,
  "title": "AY Summer Camp",
  "description": "A transformative week of adventure...",
  "date": "2025-01-24",
  "location": "Gisenyi-Rubavu",
  "tags": ["Swimming", "Worship", "Camp-Fires"],
  "image": "https://...",
  "createdAt": "2025-01-12T...",
  "updatedAt": "2025-01-12T..."
}
```

### Announcement
```json
{
  "id": 1,
  "title": "Important Update: AY Meeting Schedule",
  "content": "Due to upcoming events...",
  "priority": "high",
  "author": "AY Leadership Team",
  "createdAt": "2025-01-12T...",
  "updatedAt": "2025-01-12T..."
}
```

### Devotion
```json
{
  "id": 1,
  "title": "Faith on Fire",
  "description": "Ignite your relationship with Jesus...",
  "content": "Today's devotion focuses on...",
  "author": "AY Spiritual Team",
  "date": "2025-01-12",
  "image": "https://...",
  "category": "Daily Devotion",
  "createdAt": "2025-01-12T...",
  "updatedAt": "2025-01-12T..."
}
```

### Verse
```json
{
  "id": 1,
  "reference": "John 3:16",
  "text": "For God so loved the world...",
  "translation": "NIV",
  "category": "Salvation",
  "date": "2025-01-12",
  "createdAt": "2025-01-12T...",
  "updatedAt": "2025-01-12T..."
}
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment mode | `development` |
| `CORS_ORIGIN` | Allowed CORS origin | `http://localhost:3000` |

## Testing the API

### Using curl
```bash
# Get all events
curl http://localhost:5000/api/events

# Get daily devotion
curl http://localhost:5000/api/devotions/daily

# Health check
curl http://localhost:5000/api/health
```

### Using Postman
Import the following collection:
- Base URL: `http://localhost:5000`
- All endpoints are documented above

## Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication and authorization
- [ ] File upload functionality
- [ ] Email notifications
- [ ] API rate limiting
- [ ] Input validation middleware
- [ ] Unit and integration tests
- [ ] API documentation with Swagger

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Support

For support or questions, please contact the AY Rwanda development team.
