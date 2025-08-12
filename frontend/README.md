# AY Rwanda Frontend

This is the frontend application for the AY Rwanda Website, built with React and Tailwind CSS.

## Features

- **Modern React 18** with hooks and functional components
- **Responsive design** with Tailwind CSS
- **Client-side routing** with React Router
- **Component-based architecture** for maintainability
- **API integration** with backend services
- **Mobile-first approach** for all devices

## Pages & Components

### Pages
- **Home** (`/`) - Main landing page with hero, welcome, devotions, events, and leader message
- **Library** (`/library`) - Digital library with books, categories, and today's lesson
- **Clubs** (`/clubs`) - Youth clubs and activities information
- **Events** (`/events`) - Events management and registration
- **Contact** (`/contact`) - Contact information and forms

### Key Components
- **Hero** - Image carousel with event highlights
- **YouthDevotions** - Daily spiritual content
- **UpcomingEvents** - Event cards with registration
- **LeaderMessage** - Message from AY Director
- **FeaturedBooks** - Library book showcase
- **VerseOfTheDay** - Daily Bible verse

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Access the application:**
   Open http://localhost:3000 in your browser

## Development

### Running the Application
```bash
# Development mode with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Project Structure
```
frontend/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page-level components
│   ├── assets/        # Images and static files
│   ├── App.jsx        # Main app component
│   ├── main.jsx       # Entry point
│   └── index.css      # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind configuration
└── postcss.config.js   # PostCSS configuration
```

## API Integration

The frontend connects to the backend API for dynamic content:

- **Events**: `/api/events`
- **Announcements**: `/api/announcements`
- **Devotions**: `/api/devotions`
- **Verses**: `/api/verses`

### Environment Configuration
Create a `.env` file in the frontend directory:
```env
VITE_API_BASE_URL=http://localhost:5000
VITE_API_TIMEOUT=10000
```

## Styling

### Tailwind CSS
- **Utility-first** CSS framework
- **Responsive design** with mobile-first approach
- **Custom color scheme** for AY branding
- **Component-based** styling approach

### Custom CSS
- Global styles in `src/index.css`
- Component-specific styles when needed
- Responsive breakpoints for all screen sizes

## Component Development

### Creating New Components
1. Create component file in `src/components/`
2. Export as default function
3. Use Tailwind classes for styling
4. Follow naming conventions (PascalCase)

### Component Structure
```jsx
import React from 'react'

const ComponentName = ({ prop1, prop2 }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Component content */}
    </div>
  )
}

export default ComponentName
```

## State Management

Currently using React's built-in state management:
- **useState** for local component state
- **useEffect** for side effects and API calls
- **Props** for parent-child communication

Future enhancements may include:
- Context API for global state
- Redux Toolkit for complex state
- React Query for server state

## Performance Optimization

- **Code splitting** with React Router
- **Lazy loading** for components
- **Image optimization** with proper sizing
- **Bundle analysis** with build tools

## Testing

### Manual Testing
- Test all routes and navigation
- Verify responsive design on different devices
- Check API integration and error handling
- Validate form submissions and validation

### Future Testing
- Unit tests with Jest and React Testing Library
- Integration tests for API calls
- E2E tests with Cypress or Playwright

## Build & Deployment

### Production Build
```bash
npm run build
```

### Deployment Options
- **Vercel** - Recommended for React apps
- **Netlify** - Easy deployment with Git integration
- **GitHub Pages** - Free hosting for open source
- **AWS S3 + CloudFront** - Scalable cloud hosting

## Browser Support

- **Modern browsers** (Chrome, Firefox, Safari, Edge)
- **Mobile browsers** (iOS Safari, Chrome Mobile)
- **IE11+** (with polyfills if needed)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Code Style
- Use functional components with hooks
- Follow React best practices
- Maintain consistent naming conventions
- Add proper comments and documentation

## Troubleshooting

### Common Issues
- **Port conflicts**: Change port in `vite.config.js`
- **API errors**: Check backend server and CORS settings
- **Build failures**: Clear `node_modules` and reinstall
- **Styling issues**: Verify Tailwind configuration

### Getting Help
- Check the backend API documentation
- Review component examples in the codebase
- Contact the development team

## License

This project is licensed under the ISC License.

## Support

For support or questions, please contact the AY Rwanda development team.
