import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-ayBlue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Verse of the Day */}
          <div className="space-y-6">
            <h3 className="text-ayGold text-2xl font-bold">Verse of the Day</h3>
            <blockquote className="text-lg leading-relaxed">
              "For I know the plans I have for you," declares the Lord, "plans to prosper 
              you and not to harm you, to give you hope and a future."
            </blockquote>
            <cite className="text-xl font-semibold">Jeremiah 29:11</cite>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-ayGold text-2xl font-bold">Quick Links</h3>
            <nav className="space-y-4">
              <a href="/" className="block text-xl font-semibold hover:text-ayGold transition-colors">Home</a>
              <a href="/library" className="block text-xl font-semibold hover:text-ayGold transition-colors">Library</a>
              <a href="/clubs" className="block text-xl font-semibold hover:text-ayGold transition-colors">AY Clubs</a>
              <a href="/contact" className="block text-xl font-semibold hover:text-ayGold transition-colors">About Us</a>
              <a href="/events" className="block text-xl font-semibold hover:text-ayGold transition-colors">Events</a>
              <a href="/events" className="block text-xl font-semibold hover:text-ayGold transition-colors">Announcement</a>
            </nav>
          </div>

          {/* Contact Us */}
          <div className="space-y-6">
            <h3 className="text-ayGold text-2xl font-bold">Contact Us</h3>
            <div className="space-y-4 text-lg">
              <p className="font-semibold">📍 KN 15 Ave, Kigali, Rwanda</p>
              <p className="font-semibold">📞 +250 788 123 456</p>
              <p className="font-semibold">✉️ info@ayrwandaunion.org</p>
              <p className="font-semibold">🌐 www.ayrwandaunion.org</p>
            </div>
          </div>
        </div>

        <hr className="border-gray-600 my-8" />
        
        <div className="text-center">
          <p className="text-lg font-semibold">
            © 2025 Adventist Youth Rwanda Union Mission - Seventh-day Adventist Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
