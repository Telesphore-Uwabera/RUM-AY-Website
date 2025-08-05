import React from 'react'

const BookCategories = () => {
  const categories = [
    { name: "Ellen G White Writings", count: 23 },
    { name: "Pathfinders", count: 18 },
    { name: "Adventurers Club", count: 5 },
    { name: "Ambassadors", count: 6 },
    { name: "Master Guides", count: 12 },
    { name: "Youth Books", count: 19 },
    { name: "Devotional", count: 97 }
  ]

  return (
    <div className="card p-6">
      <h2 className="text-2xl font-bold text-ayBlue mb-6">Browse Categories</h2>
      
      <div className="space-y-4">
        {categories.map((category, index) => (
          <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
            <span className="text-lg font-semibold text-gray-800">{category.name}</span>
            <span className="bg-blue-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
              {category.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookCategories
