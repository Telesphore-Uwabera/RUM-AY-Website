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

## 🚀 Quick Startup Guide

### Getting Started in 3 Steps

#### 1. Install All Dependencies
```bash
npm run install:all
```

This will install dependencies for:
- Root project (concurrently)
- Frontend (React + dependencies)
- Backend (Express + dependencies)

#### 2. Start Both Services
```bash
npm run dev
```

This will start:
- **Backend API** on http://localhost:5000
- **Frontend App** on http://localhost:3000

#### 3. Access Your Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health

### Alternative Commands

#### Run Services Separately
```bash
# Terminal 1 - Backend
npm run dev:backend

# Terminal 2 - Frontend  
npm run dev:frontend
```

#### Production Commands
```bash
# Build frontend
npm run build

# Start backend production
npm run start:backend

# Preview frontend build
npm run start:frontend
```

### What's Running?

#### Backend (Port 5000)
- ✅ Express.js server
- ✅ RESTful API endpoints
- ✅ CORS enabled for frontend
- ✅ Sample data for testing
- ✅ Health check endpoint

#### Frontend (Port 3000)
- ✅ React 18 application
- ✅ Tailwind CSS styling
- ✅ React Router navigation
- ✅ Component-based architecture
- ✅ Ready for API integration

### API Testing

Test your backend API:
```bash
# Health check
curl http://localhost:5000/api/health

# Get all events
curl http://localhost:5000/api/events

# Get daily devotion
curl http://localhost:5000/api/devotions/daily
```

### Troubleshooting

#### Port Already in Use
- Change backend port in `backend/.env`
- Change frontend port in `frontend/vite.config.js`

#### Dependencies Issues
- Delete `node_modules` folders
- Run `npm run install:all` again

#### API Connection Issues
- Check CORS settings in `backend/server.js`
- Verify backend is running on correct port
- Check frontend environment variables

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
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` with:
   ```env
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
- **API integration** with backend services

### Backend
- **RESTful API** with Express.js
- **CRUD operations** for all resources
- **CORS enabled** for frontend communication
- **Security middleware** (Helmet)
- **Request logging** (Morgan)
- **Sample data** for development

## API Endpoints

The backend provides the following API endpoints:

- **Events**: `/api/events`
- **Announcements**: `/api/announcements`
- **Devotions**: `/api/devotions`
- **Verses**: `/api/verses`
- **Health Check**: `/api/health`

See the [backend README](./backend/README.md) for detailed endpoint documentation.

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

## Project Architecture

### Frontend Architecture
- **Component-based** design with reusable UI components
- **Page-level components** for different routes
- **State management** with React hooks
- **API integration** using axios
- **Responsive design** with Tailwind CSS

### Backend Architecture
- **MVC pattern** with controllers and routes
- **Middleware** for security and logging
- **RESTful API** design principles
- **Error handling** and validation
- **Sample data** for development and testing

## Data Flow

1. **Frontend** makes API calls to backend endpoints
2. **Backend** processes requests and returns JSON responses
3. **Frontend** updates UI based on API responses
4. **Real-time updates** through API polling or WebSocket (future)

## Next Steps

1. **Explore the API**: Visit http://localhost:5000 for API documentation
2. **Customize Data**: Modify sample data in backend controllers
3. **Add Features**: Extend components and API endpoints
4. **Database**: Integrate MongoDB or PostgreSQL
5. **Authentication**: Add user login and registration

## Future Enhancements

### Frontend
- [ ] User authentication and profiles
- [ ] Real-time notifications
- [ ] Offline support with PWA
- [ ] Advanced search and filtering
- [ ] Multi-language support

### Backend
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication with JWT
- [ ] File upload functionality
- [ ] Email notifications
- [ ] API rate limiting

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

## Documentation

- [Frontend Documentation](./frontend/README.md)
- [Backend API Documentation](./backend/README.md) 