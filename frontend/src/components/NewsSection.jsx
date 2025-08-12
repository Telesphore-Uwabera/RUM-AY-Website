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
      {/* Header with decorative bars */}
      <div className="relative pl-6">
        <h2 className="text-2xl font-bold text-blue-900">Latest</h2>
        <h2 className="text-2xl font-bold text-red-600 -mt-1">News</h2>
        <div className="absolute left-0 top-0 w-1 h-16 bg-blue-900"></div>
        <div className="absolute left-2 top-0 w-1 h-16 bg-red-600"></div>
      </div>

      {/* News Items */}
      <div className="space-y-4">
        {news.map((item, index) => (
          <article key={index} className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
            <header className="mb-3">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
              <div className="text-sm text-gray-500 mb-1">{item.date}</div>
              <div className="text-sm text-gray-500">{item.location}</div>
            </header>
            <p className="text-gray-600 mb-3 text-sm leading-relaxed">{item.content}</p>
            <footer className="text-blue-600 font-semibold text-sm">
              Author: {item.author}
            </footer>
          </article>
        ))}
      </div>

      {/* Read More Link */}
      <div className="text-center">
        <a href="#" className="text-blue-600 font-semibold hover:underline">
          Read More
        </a>
      </div>

      {/* Next Button */}
      <div className="text-right">
        <button className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default NewsSection