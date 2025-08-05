import React, { useState } from 'react'
import EventCard from '../components/EventCard'
import NewsSection from '../components/NewsSection'

const Events = () => {
  const [currentPage, setCurrentPage] = useState(0)
  
  const eventPages = [
    {
      title: "Next Month",
      color: "text-green-600",
      events: [
        {
          image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/z9DmFE9jTm.png",
          title: "AY Summer Camp",
          date: { day: "24", month: "DEC", dayName: "Fri" },
          location: "Gisenyi-Rubavu",
          tags: ["Swimming", "Worship", "Camp-Fires"],
          description: "A transformative week of adventure, worship, and friendship at the stunning Lake Kivu. Connect with nature and discover life-changing spiritual experiences.",
          buttonColor: "bg-ayGreen"
        },
        {
          image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/EVhvv6Y0GJ.png",
          title: "Leadership Meeting",
          date: { day: "24", month: "DEC", dayName: "Fri" },
          location: "Gisenyi-Rubavu",
          tags: ["Worship", "Camp-Fires"],
          description: "A transformative week of adventure, worship, and friendship at the stunning Lake Kivu. Connect with nature and discover life-changing spiritual experiences.",
          buttonColor: "bg-blue-600"
        },
        {
          image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/b2rge39SET.png",
          title: "AY Summer Camp",
          date: { day: "24", month: "DEC", dayName: "Fri" },
          location: "Gisenyi-Rubavu",
          tags: ["Swimming", "Worship", "Camp-Fires"],
          description: "A transformative week of adventure, worship, and friendship at the stunning Lake Kivu. Connect with nature and discover life-changing spiritual experiences.",
          buttonColor: "bg-ayGreen"
        }
      ]
    },
    {
      title: "This Month",
      color: "text-green-600",
      events: [
        {
          image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/ekt2YdDsDb.png",
          title: "AY Awarding Ceremony",
          date: { day: "02", month: "Sept", dayName: "Sun" },
          location: "Kigali-Rwanda",
          tags: ["Swimming", "Worship", "Camp-Fires"],
          description: "A transformative week of adventure, worship, and friendship at the stunning Lake Kivu. Connect with nature and discover life-changing spiritual experiences.",
          buttonColor: "bg-ayGreen"
        },
        {
          image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/st0oc2JVyK.png",
          title: "AY Music Class",
          date: { day: "24", month: "DEC", dayName: "Fri" },
          location: "Kigali-Rwanda",
          tags: ["Swimming", "Worship", "Camp-Fires"],
          description: "A transformative week of adventure, worship, and friendship at the stunning Lake Kivu. Connect with nature and discover life-changing spiritual experiences.",
          buttonColor: "bg-red-600"
        },
        {
          image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/0CPX8OMjkM.png",
          title: "Leadership Meeting",
          date: { day: "24", month: "DEC", dayName: "Fri" },
          location: "Gisenyi-Rubavu",
          tags: ["Worship", "Camp-Fires"],
          description: "A transformative week of adventure, worship, and friendship at the stunning Lake Kivu. Connect with nature and discover life-changing spiritual experiences.",
          buttonColor: "bg-ayGreen"
        }
      ]
    },
    {
      title: "Last Month",
      color: "text-green-600",
      events: [
        {
          image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/f8Fn7oRK89.png",
          title: "AY Summer Camp",
          date: { day: "24", month: "DEC", dayName: "Fri" },
          location: "Gisenyi-Rubavu",
          tags: ["Swimming", "Worship", "Camp-Fires"],
          description: "A transformative week of adventure, worship, and friendship at the stunning Lake Kivu. Connect with nature and discover life-changing spiritual experiences.",
          buttonColor: "bg-ayGreen"
        },
        {
          image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/oVoWdFjdo2.png",
          title: "Leadership Meeting",
          date: { day: "24", month: "DEC", dayName: "Fri" },
          location: "Gisenyi-Rubavu",
          tags: ["Worship", "Camp-Fires"],
          description: "A transformative week of adventure, worship, and friendship at the stunning Lake Kivu. Connect with nature and discover life-changing spiritual experiences.",
          buttonColor: "bg-red-700"
        },
        {
          image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/e0pGGdexAM.png",
          title: "AY Summer Camp",
          date: { day: "24", month: "DEC", dayName: "Fri" },
          location: "Gisenyi-Rubavu",
          tags: ["Swimming", "Worship", "Camp-Fires"],
          description: "A transformative week of adventure, worship, and friendship at the stunning Lake Kivu. Connect with nature and discover life-changing spiritual experiences.",
          buttonColor: "bg-ayGreen"
        }
      ]
    }
  ]

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % eventPages.length)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + eventPages.length) % eventPages.length)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-ayBlue mb-4">News & Events</h1>
          <p className="text-xl text-gray-600">
            "Stay updated with upcoming events and announcements from the AY movement across Rwanda."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Events Section */}
          <div className="lg:col-span-3">
            <div className="card p-8">
              <header className="text-center mb-8">
                <h2 className="text-4xl font-black text-ayBlue mb-2">Upcoming AY Events</h2>
                <div className="w-36 h-1 bg-red-600 mx-auto"></div>
              </header>

              {/* Page Title */}
              <div className="mb-6">
                <h3 className={`text-2xl font-black ${eventPages[currentPage].color}`}>
                  {eventPages[currentPage].title}
                </h3>
              </div>

              {/* Events Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {eventPages[currentPage].events.map((event, index) => (
                  <EventCard key={index} event={event} />
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-center space-x-4">
                <button
                  onClick={prevPage}
                  className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <button
                  onClick={nextPage}
                  className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* News Sidebar */}
          <div className="lg:col-span-1">
            <NewsSection />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events
