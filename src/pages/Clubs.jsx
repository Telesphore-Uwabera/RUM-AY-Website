import React from 'react'
import ClubCard from '../components/ClubCard'

const Clubs = () => {
  const clubs = [
    {
      name: "Adventures",
      color: "text-blue-600",
      borderColor: "border-blue-600",
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/1DUqkBXhw9.png",
      description: "A club for children aged 6–9 that builds faith, character, and family values. Through fun activities, they learn about Jesus and healthy living.",
      members: "Over 2,000 Members",
      buttonColor: "bg-blue-700"
    },
    {
      name: "Pathfinders",
      color: "text-red-600",
      borderColor: "border-red-600",
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/M0obCqypUj.png",
      description: "Designed for youth aged 10–15 to grow in faith, service, and adventure. They develop leadership, Bible knowledge, and survival skills.",
      members: "Over 34,000 Members",
      buttonColor: "bg-red-600"
    },
    {
      name: "Ambassadors",
      color: "text-red-800",
      borderColor: "border-red-800",
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/PvU3UMmN2a.png",
      description: "For older teens (16–21) to deepen their spiritual life and leadership.The club empowers them to face real-life challenges with faith.",
      members: "Over 9,000 Members",
      buttonColor: "bg-orange-500"
    },
    {
      name: "Master Guide",
      color: "text-blue-900",
      borderColor: "border-blue-900",
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/HdnzwxA9oT.png",
      description: "A leadership and mentorship program for experienced youth and young adults. It prepares them to serve, train, and disciple others in all clubs.",
      members: "Over 50,000 Members",
      buttonColor: "bg-green-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-ayBlue mb-4">Explore AY Clubs</h1>
          <p className="text-xl text-gray-600">Choose your club and grow in faith, service, and leadership</p>
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {clubs.map((club, index) => (
            <ClubCard key={index} club={club} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Clubs
