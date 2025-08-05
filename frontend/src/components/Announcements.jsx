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

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-ayBlue">Announcements</h2>
      <div className="space-y-4">
        {announcements.map((announcement, index) => (
          <article key={index} className="card p-6">
            <header className="mb-3">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{announcement.title}</h3>
              <time className="text-gray-600">{announcement.date}</time>
            </header>
            <p className="text-gray-600 mb-4">{announcement.content}</p>
            <a href="#" className="text-ayBlue font-semibold hover:underline">
              {announcement.link}
            </a>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Announcements
