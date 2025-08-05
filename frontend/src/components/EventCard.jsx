import React from 'react'

const EventCard = ({ event }) => {
  return (
    <article className="bg-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4">
          <div className="bg-white rounded-t-lg px-3 py-1">
            <span className="text-sm font-semibold text-gray-800">{event.date.dayName}</span>
          </div>
          <div className={`${event.buttonColor} text-white px-3 py-2 rounded-b-lg text-center`}>
            <div className="text-xs font-light">{event.date.month}</div>
            <div className="text-lg font-semibold">{event.date.day}</div>
          </div>
        </div>
        <div className="absolute bottom-4 left-4">
          <h3 className="text-2xl font-bold text-white">{event.title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {event.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="bg-white border border-green-200 text-ayGreen text-sm px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{event.description}</p>
        
        <div className="flex items-center mb-4 p-2 border border-gray-300 rounded-lg">
          <svg className="w-4 h-4 text-ayGreen mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-800 font-medium">{event.location}</span>
        </div>
        
        <button className={`${event.buttonColor} text-white px-6 py-2 rounded font-medium hover:opacity-90 transition-opacity`}>
          Register Now
        </button>
      </div>
    </article>
  )
}

export default EventCard
