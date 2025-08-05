import React from 'react'

const VerseOfTheDay = () => {
  return (
    <div className="bg-blue-100 rounded-3xl p-6">
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-bold text-gray-800">📖 Youth Verse of the Day</h3>
        <blockquote className="text-lg text-gray-600 leading-relaxed">
          "For I know the plans I have for you," declares the Lord, "plans to prosper 
          you and not to harm you, to give you hope and a future."
        </blockquote>
        <cite className="text-xl font-semibold text-gray-800">Jeremiah 29:11</cite>
      </div>
    </div>
  )
}

export default VerseOfTheDay
