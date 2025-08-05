import React from 'react'

const TodaysLesson = () => {
  return (
    <div className="bg-gray-200 border border-gray-300 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-ayBlue mb-4">Umurinzi wo Muruturuturu</h2>
      <p className="text-lg font-semibold text-gray-800 mb-6">Sabbath School Devotional</p>
      
      <div className="bg-blue-100 rounded-lg p-6 mb-6">
        <blockquote className="text-gray-600 leading-relaxed mb-4">
          The LORD is my shepherd, I shall not be in want. He restores my soul. He guides me in paths of righteousness for his name's sake. Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me.
        </blockquote>
        <cite className="text-gray-800 font-semibold">Psalm 119:105</cite>
      </div>
      
      <button className="w-full bg-blue-700 text-white py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors">
        Read today's lesson
      </button>
    </div>
  )
}

export default TodaysLesson
