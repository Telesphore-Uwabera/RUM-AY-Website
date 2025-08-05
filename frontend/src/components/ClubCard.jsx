import React from 'react'

const ClubCard = ({ club }) => {
  return (
    <article className="card p-8 hover:shadow-xl transition-shadow duration-300">
      <header className="mb-6">
        <h2 className={`text-3xl font-black ${club.color} mb-2`}>{club.name}</h2>
        <div className={`w-full h-1 ${club.borderColor.replace('border', 'bg')}`}></div>
      </header>
      
      <div className="mb-6">
        <img
          src={club.image}
          alt={club.name}
          className="w-full h-52 object-cover rounded-full border-2 border-gray-300"
        />
      </div>
      
      <div className="space-y-4">
        <p className="text-lg text-gray-600 leading-relaxed">{club.description}</p>
        
        <div className="flex justify-between items-center">
          <button className={`${club.buttonColor} text-white px-8 py-3 rounded font-semibold hover:opacity-90 transition-opacity`}>
            Explore Club
          </button>
          <span className="text-gray-600 font-medium">{club.members}</span>
        </div>
      </div>
    </article>
  )
}

export default ClubCard
