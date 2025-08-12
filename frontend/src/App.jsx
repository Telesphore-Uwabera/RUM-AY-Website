// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Shared components
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

// Home layout components
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import YouthDevotions from './components/YouthDevotions'
import UpcomingEvents from './components/UpcomingEvents'
import LeaderMessage from './components/LeaderMessage'

// Other pages
import Library from './pages/Library'
import Clubs from './pages/Clubs'
import Events from './pages/Events'
import Contact from './pages/Contact'
// import Contact from './pages/Contact1'

function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <main className="flex-1">
        <Hero />
        <Welcome />
        <YouthDevotions />
        <UpcomingEvents />
        <LeaderMessage />
      </main>
      <Sidebar />
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="min-h-[500px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
