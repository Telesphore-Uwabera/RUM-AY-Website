import React from 'react'

const FeaturedBooks = ({ searchTerm }) => {
  const books = [
    {
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/sDZNkT96bu.png",
      title: "Steps to Christ",
      author: "Ellen G. White",
      category: "Ellen G. White",
      description: "A timeless guide to developing a personal relationship with Jesus Christ and understanding salvation.",
      categoryColor: "bg-green-600"
    },
    {
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/wyVdTQzZiY.png",
      title: "Pathfinder Leadership Manual",
      author: "General Conference Youth Ministries",
      category: "Pathfinders",
      description: "Essential guide for Pathfinder leaders with activities, ceremonies, and leadership principles.",
      categoryColor: "bg-green-600"
    },
    {
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/v7F0ZO7Wes.png",
      title: "Jesus Calling",
      author: "Pr Nshuti Aimable",
      category: "Devotional",
      description: "Daily devotions for young hearts seeking to hear God's voice in their everyday lives.",
      categoryColor: "bg-green-600"
    },
    {
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/o6gf8BZW0n.png",
      title: "Little Lambs Activity Book",
      author: "Adventurer Club",
      category: "Adventures",
      description: "Fun activities and crafts designed for our youngest church members to learn about Jesus.",
      categoryColor: "bg-green-600"
    },
    {
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/9oLGgOYWj5.png",
      title: "Morning Watch",
      author: "GC Sabbath School Ministry",
      category: "Bible",
      description: "Fun activities and crafts designed for our youngest church members to learn about Jesus.",
      categoryColor: "bg-green-600"
    },
    {
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/tpahsZQ7Wk.png",
      title: "Emergency Aid",
      author: "Mg Agabe Jean",
      category: "Youth Books",
      description: "Fun activities and crafts designed for our youngest church members to learn about Jesus.",
      categoryColor: "bg-green-600"
    }
  ]

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {filteredBooks.map((book, index) => (
        <article key={index} className="bg-gray-200 rounded-2xl overflow-hidden">
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <div className="mb-3">
              <span className={`${book.categoryColor} text-white text-sm px-3 py-1 rounded-full`}>
                {book.category}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-ayBlue mb-2">{book.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{book.author}</p>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{book.description}</p>
            
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
              Read Online
            </button>
          </div>
        </article>
      ))}
    </div>
  )
}

export default FeaturedBooks
