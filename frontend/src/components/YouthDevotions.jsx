import React from 'react'

const YouthDevotions = () => {
  const devotions = [
    {
      title: "Faith on Fire",
      description: "Ignite your relationship with Jesus through powerful daily devotions designed specifically for young Adventists. Explore life's challenges and opportunities.",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Faith on Fire", 
      description: "Ignite your relationship with Jesus through powerful daily devotions designed specifically for young Adventists. Explore life's challenges and opportunities.",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Faith on Fire",
      description: "Ignite your relationship with Jesus through powerful daily devotions designed specifically for young Adventists. Explore life's challenges and opportunities.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Youth Devotions</h2>
      <div className="border-b-4 border-blue-600 w-16 mx-auto mb-8"></div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {devotions.map((devotion, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div 
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${devotion.image})` }}
            ></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {devotion.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {devotion.description}
              </p>
              <a 
                href="#" 
                className="text-blue-600 text-sm font-medium hover:underline"
              >
                Learn more &gt;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default YouthDevotions