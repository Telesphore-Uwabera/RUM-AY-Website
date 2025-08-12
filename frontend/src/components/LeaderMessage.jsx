import React from 'react'
import logo from '../assets/image2.png'

const LeaderMessage = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      {/* Header + underline */}
      <div className="mb-8 ml-4 md:ml-16">
        <h2 className="text-3xl font-bold text-gray-900">Message from Our Leader</h2>
        <div className="border-b-4 border-red-500 w-32 mt-1"></div>
      </div>

      {/* Image + Message */}
      <div className="flex flex-col md:flex-row items-start gap-6 md:ml-16">
        {/* Leader Image */}
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt="AY Director"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-gray-200"
          />
        </div>

        {/* Message Content */}
        <div className="flex-1">
          <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
            "Young people of Rwanda, you are God's chosen generation! Your energy, creativity, and passion can transform our churches and communities. Don't wait for tomorrow to make a difference - God wants to use you right now to advance His kingdom. Together, we can reach every young person in Rwanda with the hope of Jesus!"
          </blockquote>
          <div className="text-right">
            <div className="font-bold text-gray-900 text-lg">- Pr Mg Sarah Uwineza</div>
            <div className="text-sm text-gray-600">AY Director, Rwanda Union Mission</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeaderMessage
