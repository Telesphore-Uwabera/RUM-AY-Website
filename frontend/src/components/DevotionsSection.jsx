import React from 'react'

const DevotionsSection = () => {
  const devotions = [
    {
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/RzWrXQ3G23.png",
      title: "Faith on Fire",
      description: "Ignite your relationship with Jesus through powerful daily devotions designed specifically for young people navigating life's challenges and opportunities.",
      link: "Learn more →"
    },
    {
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/rvKvpGOKHB.png",
      title: "Faith on Fire",
      description: "Ignite your relationship with Jesus through powerful daily devotions designed specifically for young people navigating life's challenges and opportunities.",
      link: "Learn more →"
    },
    {
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/XguzBqO7yT.png",
      title: "Faith on Fire",
      description: "Ignite your relationship with Jesus through powerful daily devotions designed specifically for young people navigating life's challenges and opportunities.",
      link: "Learn more →"
    }
  ]

  return (
    <section className="card p-8">
      <header className="text-center mb-8">
        <h2 className="text-4xl font-black text-ayBlue mb-2">Youth Devotions</h2>
        <div className="w-36 h-1 bg-blue-600 mx-auto"></div>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {devotions.map((devotion, index) => (
          <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={devotion.image}
              alt={devotion.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">{devotion.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{devotion.description}</p>
              <a href="#" className="text-blue-600 font-semibold text-sm hover:underline">
                {devotion.link}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default DevotionsSection
