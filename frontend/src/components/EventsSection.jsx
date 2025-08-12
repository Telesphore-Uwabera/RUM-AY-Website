import React from 'react'

const EventsSection = () => {
  const events = [
    {
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/R8XB3Vpmd6.png",
      title: "AY Summer Camp",
      date: { day: "24", month: "DEC", dayName: "Fri" },
      location: "Gisenyi-Rubavu",
      tags: ["Swimming", "Worship", "Camp-Fires"],
      description: "A transformative week of adventure, worship, and friendship at the stunning Lake Kivu. Connect with nature and discover life-changing spiritual experiences.",
      buttonColor: "bg-ayGreen"
    },
    {
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/nBNYFdpNjr.png",
      title: "AY Awarding Ceremony",
      date: { day: "02", month: "Sept", dayName: "Sun" },
      location: "Kigali-Rwanda",
      tags: ["Swimming", "Worship", "Camp-Fires"],
      description: "A transformative week of adventure, worship, and friendship at the stunning Lake Kivu. Connect with nature and discover life-changing spiritual experiences.",
      buttonColor: "bg-ayGreen"
    },
    {
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/YhP05NDJqZ.png",
      title: "AY Music Class",
      date: { day: "24", month: "DEC", dayName: "Fri" },
      location: "Kigali-Rwanda",
      tags: ["Swimming", "Worship", "Camp-Fires"],
      description: "A transformative week of adventure, worship, and friendship at the stunning Lake Kivu. Connect with nature and discover life-changing spiritual experiences.",
      buttonColor: "bg-ayGreen"
    }
  ]

  return (
    <section className="card p-8">
      <header className="text-center mb-8">
        <h2 className="text-4xl font-black text-ayBlue mb-2">Upcoming AY Events</h2>
        <div className="w-36 h-1 bg-red-600 mx-auto"></div>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <article key={index} className="bg-gray-200 rounded-2xl overflow-hidden">
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
                <div className="bg-ayGreen text-white px-3 py-2 rounded-b-lg text-center">
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
              
              <button className={`${eventbuttonColor} text-white px-6 py-2 rounded font-medium hover:opacity-90 transition-opacity`}>
                Register Now
              </button>
            </div>
          </article>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <a href="/events" className="text-blue-600 font-semibold text-lg hover:underline">
          Learn more →
        </a>
      </div>
    </section>
  )
}

export default EventsSection
