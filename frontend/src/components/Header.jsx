import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-gray-50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-900 leading-tight">
              Logo<br />here
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/library"
              className={`nav-link ${isActive('/library') ? 'active' : ''}`}
            >
              Library
            </Link>
            <Link
              to="/clubs"
              className={`nav-link ${isActive('/clubs') ? 'active' : ''}`}
            >
              Clubs
            </Link>
            <Link
              to="/events"
              className={`nav-link ${isActive('/events') ? 'active' : ''}`}
            >
              Events & Announcements
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Sidebar Image */}
          <div className="hidden lg:block w-40 h-32">
            <img
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/bSyZeFxHog.png"
              alt="AY Rwanda"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/library"
                className={`nav-link ${isActive('/library') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Library
              </Link>
              <Link
                to="/clubs"
                className={`nav-link ${isActive('/clubs') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Clubs
              </Link>
              <Link
                to="/events"
                className={`nav-link ${isActive('/events') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Events & Announcements
              </Link>
              <Link
                to="/contact"
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
