import React from 'react'

const NewsSection = () => {
  const news = [
    {
      title: "New Bible Study Groups",
      date: "9:00 am, July 25, 2025",
      location: "Kacyiru Sda Church",
      content: "Join our new weekly Bible study groups starting next month. Multiple locations and times available to fit your schedule.",
      author: "Pr Ezekiel Yohana"
    },
    {
      title: "New Bible Study Groups",
      date: "9:00 am, July 25, 2025",
      location: "Kacyiru Sda Church",
      content: "Download the new AY Rwanda app for devotions, event updates, prayer requests, and connecting with other young Adventists!",
      author: "Pr Ezekiel Yohana"
    },
    {
      title: "Leadership Training",
      date: "July 20, 2025",
      location: "Kacyiru Sda Church",
      content: "Develop your leadership skills with our monthly training sessions. Learn to lead with confidence and Christ-like character.",
      author: "Pr Ezekiel Yohana"
    },
    {
      title: "Youth Music Ministry",
      date: "July 15, 2025",
      location: "Kacyiru Sda Church",
      content: "Calling all young musicians! Join our expanding music ministry and use your talents to praise God and inspire others.",
      author: "Pr Ezekiel Yohana"
    },
    {
      title: "Youth Music Ministry",
      date: "July 15, 2025",
      location: "Kacyiru Sda Church",
      content: "Calling all young musicians! Join our expanding music ministry and use your talents to praise God and inspire others.",
      author: "Pr Ezekiel Yohana"
    },
    {
      title: "Youth Music Ministry",
      date: "July 15, 2025",
      location: "Kacyiru Sda Church",
      content: "Calling all young musicians! Join our expanding music ministry and use your talents to praise God and inspire others.",
      author: "Pr Ezekiel Yohana"
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="relative">
        <h2 className="text-4xl font-black text-ayBlue">Latest News</h2>
        <div className="absolute left-0 top-0 w-1 h-28 bg-ayBlue"></div>
        <div className="absolute left-4 top-3 w-1 h-20 bg-red-600"></div>
      </div>

      {/* News Items */}
      <div className="space-y-6">
        {news.map((item, index) => (
          <article key={index} className="card p-6 shadow-md">
            <header className="mb-3">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.title}</h3>
              <time className="text-gray-600 text-sm">{item.date}</time>
              <p className="text-gray-600 text-sm">{item.location}</p>
            </header>
            <p className="text-gray-600 mb-4 leading-relaxed">{item.content}</p>
            <footer className="text-ayBlue font-semibold">Author: {item.author}</footer>
          </article>
        ))}
      </div>

      {/* Next Button */}
      <div className="text-right">
        <button className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default NewsSection
