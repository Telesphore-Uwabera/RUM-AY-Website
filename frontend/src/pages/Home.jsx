import React, { useState } from 'react'
import Hero from '../components/Hero.jsx'
import Welcome from '../components/Welcome'
import Announcements from '../components/Announcements'
import YouthDevotions from '../components/YouthDevotions'
import UpcomingEvents from '../components/UpcomingEvents'
import LeaderMessage from '../components/LeaderMessage'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto p-4">
        {/* Main Content - Left Side */}
        <div className="lg:col-span-3 space-y-6">
          <Hero />
          <Welcome />
          <YouthDevotions />
          <UpcomingEvents />
          <LeaderMessage />
        </div>
        
        {/* Sidebar - Right Side */}
        <div className="lg:col-span-1 space-y-6">
          <Announcements />
        </div>
      </div>
    </div>
  )
}

export default Home