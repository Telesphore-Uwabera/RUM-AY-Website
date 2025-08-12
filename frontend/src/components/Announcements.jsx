import React from 'react'

const Announcements = () => {
  const announcements = [
    {
      title: "New Bible Study Groups",
      date: "July 25, 2025",
      content: "Join our new weekly Bible study groups starting next month. Multiple locations and times available to fit your schedule.",
      link: "Read More"
    },
    {
      title: "AY Mobile Launch",
      date: "July 22, 2025",
      content: "Download the new AY Rwanda app for devotions, event updates, prayer requests, and connecting with other young Adventists!",
      link: "Read More"
    },
    {
      title: "Leadership Training",
      date: "July 20, 2025",
      content: "Develop your leadership skills with our monthly training sessions. Learn to lead with confidence and Christ-like character.",
      link: "Read More"
    },
    {
      title: "Youth Music Ministry",
      date: "July 15, 2025",
      content: "Calling all young musicians! Join our expanding music ministry and use your talents to praise God and inspire others.",
      link: "Read More"
    }
  ]

  // Youth Verse of the Day Component
  const VerseOfTheDay = () => (
    <div className="bg-blue-100 rounded-lg p-6 mb-6">
      <div className="flex items-center mb-3">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
          <span className="text-white text-sm font-bold">📖</span>
        </div>
        <h3 className="text-lg font-bold text-blue-800">Youth Verse of the Day</h3>
      </div>
      <blockquote className="text-blue-700 italic mb-3 text-sm leading-relaxed">
        "For I know the plans I have for you," declares the Lord, "plans to prosper 
        you and not to harm you, to give you hope and a future."
      </blockquote>
      <p className="text-blue-800 font-semibold text-center">Jeremiah 29:11</p>
    </div>
  )

  return (
    <div className="space-y-6">
      {/* Verse of the Day */}
      <VerseOfTheDay />
      
      {/* Announcements */}
      <div className="space-y-4">
        {announcements.map((announcement, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {announcement.title}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{announcement.date}</p>
            <p className="text-gray-600 text-sm mb-3 leading-relaxed">
              {announcement.content}
            </p>
            <a 
              href="#" 
              className="text-blue-600 text-sm font-semibold hover:underline"
            >
              {announcement.link}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Announcements