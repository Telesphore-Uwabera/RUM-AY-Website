import React from 'react'

const Welcome = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to AY Rwanda!</h2>
      <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
        We are young Adventists passionate about Jesus Christ, committed to 
        service, and excited about making a difference. Join our community 
        of faith, friendship, and fun!
      </p>
      <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
        Join Our Mission
      </button>
    </div>
  )
}

export default Welcome