import React, { useState } from 'react'
import FeaturedBooks from '../components/FeaturedBooks'
import BookCategories from '../components/BookCategories'
import TodaysLesson from '../components/TodaysLesson'

const Library = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quote Section */}
        <div className="bg-blue-100 rounded-2xl p-8 mb-8 text-center">
          <blockquote className="text-2xl font-bold text-gray-800 mb-4">
            " The greatest want of the world is the want of men—men who will not be bought or sold, men who in their inmost souls are true and honest. "
          </blockquote>
          <cite className="text-lg text-gray-600">Education, p. 57 - EGW Writings</cite>
          
          <div className="flex justify-center mt-6 space-x-2">
            <div className="w-5 h-5 bg-gray-600 rounded-full"></div>
            <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
            <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-black text-ayBlue">Featured Books</h1>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Book..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-72 px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <FeaturedBooks searchTerm={searchTerm} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <TodaysLesson />
            <BookCategories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Library
