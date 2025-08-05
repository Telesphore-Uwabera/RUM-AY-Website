import React, { useState } from 'react'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/mdC4yDFsmc.png",
      title: "Pathfinder Day 2025",
      subtitle: "Making a difference in our communities through service and love."
    },
    {
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/mvBaWBpP7z.png",
      title: "Adventures Day 2025",
      subtitle: "Making a difference in our communities through service and love."
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-96 md:h-[500px]">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
              <div className="p-8 text-white">
                <h1 className="text-4xl md:text-5xl font-black text-yellow-400 mb-2">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-xl md:text-2xl font-medium">
                  {slides[currentSlide].subtitle}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex space-x-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 bg-gray-600 bg-opacity-70 rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition-all"
              >
                <span className="text-xl">‹</span>
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-gray-600 bg-opacity-70 rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition-all"
              >
                <span className="text-xl">›</span>
              </button>
            </div>
          </div>

          {/* Welcome Content */}
          <div className="p-8 text-center">
            <h2 className="text-4xl font-black text-ayBlue mb-4">Welcome to AY Rwanda!</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              We are young Adventists passionate about Jesus, committed to service, and excited about making a difference. 
              Join our community of faith, friendship, and fun!
            </p>
            <button className="btn-secondary text-xl px-8 py-4">
              Join Our Mission
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
