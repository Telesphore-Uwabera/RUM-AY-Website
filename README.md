# AY Rwanda Complete Website

A full-stack web application for the Adventist Youth (AY) community in Rwanda, featuring both frontend and backend components.

## Project Overview

This project serves as an online hub for young Adventists in Rwanda, providing:
- **Events Management**: Upcoming events and activities
- **Announcements**: Important updates and news
- **Daily Devotions**: Spiritual content and inspiration
- **Bible Verses**: Daily verses and scripture
- **Community Features**: Connecting young Adventists

## Project Structure

```
AY Rwanda Complete Website/
├── frontend/           # React frontend application
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Page-level components
│   │   ├── App.jsx     # Main app component
│   │   └── main.jsx    # Entry point
│   ├── package.json    # Frontend dependencies
│   └── index.html      # HTML template
├── backend/            # Node.js/Express backend API
│   ├── routes/         # API route handlers
│   ├── controllers/    # Business logic
│   ├── models/         # Data models
│   ├── middleware/     # Custom middleware
│   ├── config/         # Configuration files
│   ├── server.js       # Main server file
│   └── package.json    # Backend dependencies
└── README.md          # This file
```

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Access the application:**
   Open http://localhost:3000 in your browser

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   Create a `.env` file with:
   ```
   PORT=5000
   NODE_ENV=development
   CORS_ORIGIN=http://localhost:3000
   ```

4. **Start the server:**
   ```bash
   npm run dev
   ```

5. **API will be available at:**
   http://localhost:5000

## Features

### Frontend
- **React-based UI** with modern design
- **Responsive layout** for all devices
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Component-based architecture**

### Backend
- **RESTful API** with Express.js
- **CRUD operations** for all resources
- **CORS enabled** for frontend communication
- **Security middleware** (Helmet)
- **Request logging** (Morgan)

## API Endpoints

The backend provides the following API endpoints:

- **Events**: `/api/events`
- **Announcements**: `/api/announcements`
- **Devotions**: `/api/devotions`
- **Verses**: `/api/verses`

See the backend README for detailed endpoint documentation.

## Development

### Running Both Services

1. **Terminal 1 - Backend:**
   ```bash
   cd backend
   npm run dev
   ```

2. **Terminal 2 - Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

### Environment Variables

Create `.env` files in both frontend and backend directories as needed for your specific configuration.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Support

For support or questions, please contact the AY Rwanda leadership team. 