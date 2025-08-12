import React from 'react'

const UpcomingEvents = () => {
  const events = [
    {
      date: { day: "24", month: "Fri" },
      title: "AY Summer Camp",
      description: "A transformative week of adventure, worship, and friendship at the stunning Lake Kivu. Connect with nature and discover life-changing spiritual experiences.",
      location: "Gisenyi-Rubavu",
      tags: ["Swimming", "Worship", "Camp-Fires"],
      image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2089&q=80"
    },
    {
      date: { day: "02", month: "Sun" },
      title: "AY Awarding Ceremony", 
      description: "A transformative week of adventure, worship, and friendship at the stunning Lake Kivu. Connect with nature and discover life-changing spiritual experiences.",
      location: "Kigali-Rwanda",
      tags: ["Swimming", "Worship", "Camp-Fires"],
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      date: { day: "21", month: "Fri" },
      title: "AY Music Class",
      description: "A transformative week of adventure, worship, and friendship at the stunning Lake Kivu. Connect with nature and discover life-changing spiritual experiences.",
      location: "Kigali-Rwanda", 
      tags: ["Swimming", "Worship", "Camp-Fires"],
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Upcoming AY Events</h2>
      <div className="border-b-4 border-red-500 w-16 mx-auto mb-8"></div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            {/* Date Badge */}
            <div className="relative">
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${event.image})` }}
              >
                <div className="absolute top-4 left-4 bg-green-600 text-white rounded-lg p-2 text-center min-w-[50px]">
                  <div className="text-xs font-medium">{event.date.month}</div>
                  <div className="text-xl font-bold">{event.date.day}</div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {event.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {event.description}
              </p>
              
              {/* Location */}
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span className="mr-1">📍</span>
                {event.location}
              </div>
              
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <a href="#" className="text-blue-600 font-semibold hover:underline">
          Learn more →
        </a>
      </div>
    </div>
  )
}

export default UpcomingEvents