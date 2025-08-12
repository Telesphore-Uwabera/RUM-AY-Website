import React from 'react'

const Sidebar = () => {
  const sidebarItems = [
    {
      title: "New Bible Study Groups",
      date: "July 25, 2025",
      description: "Join our new weekly Bible study groups starting next month. Multiple locations and times available to fit your schedule.",
      link: "Read More"
    },
    {
      title: "AY Mobile Launch",
      date: "July 22, 2025",
      description: "Download the new AY Rwanda app for devotions, event updates, prayer requests, and connecting with other young Adventists!",
      link: "Read More"
    },
    {
      title: "Leadership Training",
      date: "July 20, 2025",
      description: "Develop your leadership skills with our monthly training sessions. Learn to lead with confidence and Christ-like character.",
      link: "Read More"
    },
    {
      title: "Youth Music Ministry",
      date: "July 15, 2025",
      description: "Calling all young musicians! Join our expanding music ministry and use your talents to praise God and inspire others.",
      link: "Read More"
    }
  ]

  return (
    <aside className="w-full md:w-80 bg-white p-6 shadow-xl rounded-lg mt-8 md:mt-0">
      {/* Verse of the Day Box */}
      <div className="mb-8 bg-blue-100 p-4 rounded-lg shadow-md">
        <div className="flex items-center mb-2">
          <span className="text-blue-600 mr-2">📖</span>
          <h3 className="font-semibold text-gray-900">Youth Verse of the Day</h3>
        </div>
        <blockquote className="text-sm text-gray-700 italic mb-2">
          "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, to give you hope and a future."
        </blockquote>
        <div className="text-sm font-semibold text-gray-900">Jeremiah 29:11</div>
      </div>

      {/* Announcements Header */}
      <h2 className="text-lg font-bold text-blue-900 text-center mb-4">Announcements</h2>

      {/* List of Announcements */}
      <div className="space-y-6">
        {sidebarItems.map((item, index) => (
          <article key={index} className="border-b border-gray-200 pb-4">
            <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
            <div className="text-xs text-gray-500 mb-2">{item.date}</div>
            <p className="text-sm text-gray-600 mb-2 leading-relaxed">{item.description}</p>
            <a href="#" className="text-blue-600 text-sm font-medium hover:underline">{item.link}</a>
          </article>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
