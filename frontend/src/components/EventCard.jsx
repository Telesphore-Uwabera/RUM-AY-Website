import React from 'react'

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        
        {/* Date Badge */}
        <div className="absolute top-4 left-4">
          <div className="bg-white rounded-t-lg px-3 py-1 text-center min-w-[50px]">
            <span className="text-xs font-medium text-gray-800">{event.date.dayName}</span>
          </div>
          <div className={`${event.buttonColor} text-white px-3 py-2 rounded-b-lg text-center min-w-[50px]`}>
            <div className="text-xs font-light">{event.date.month}</div>
            <div className="text-lg font-bold">{event.date.day}</div>
          </div>
        </div>
        
        {/* Title Overlay */}
        <div className="absolute bottom-4 left-4">
          <h3 className="text-xl font-bold text-white drop-shadow-lg">{event.title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {event.tags.map((tag, tagIndex) => (
            <span 
              key={tagIndex} 
              className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full border"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Description */}
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {event.description}
        </p>
        
        {/* Location */}
        <div className="flex items-center mb-4 p-2 border border-gray-300 rounded-lg">
          <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-800 font-medium text-sm">{event.location}</span>
        </div>
        
        {/* Register Button */}
        <button className={`w-full ${event.buttonColor} text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity`}>
          Register Now
        </button>
      </div>
    </div>
  )
}

export default EventCard