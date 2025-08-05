import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import VerseOfTheDay from '../components/VerseOfTheDay'
import Announcements from '../components/Announcements'
import DevotionsSection from '../components/DevotionsSection'
import EventsSection from '../components/EventsSection'
import LeaderMessage from '../components/LeaderMessage'

const Home = () => {
  return (
    <div className="space-y-8">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <DevotionsSection />
            <EventsSection />
            <LeaderMessage />
          </div>
          <div className="space-y-8">
            <VerseOfTheDay />
            <Announcements />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
