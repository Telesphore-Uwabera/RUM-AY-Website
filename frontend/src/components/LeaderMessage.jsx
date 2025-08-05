import React from 'react'

const LeaderMessage = () => {
  return (
    <section className="card p-8">
      <header className="text-center mb-8">
        <h2 className="text-4xl font-black text-ayBlue mb-2">Message from Our Leader</h2>
        <div className="w-36 h-1 bg-red-600 mx-auto"></div>
      </header>
      
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-04/vVR2OEKFa5.png"
          alt="Pr Mg Sarah Uwineza"
          className="w-60 h-60 rounded-full object-cover"
        />
        
        <div className="flex-1">
          <blockquote className="text-xl text-gray-600 leading-relaxed mb-6">
            "Young people of Rwanda, you are God's chosen generation! Your energy, creativity, and passion can transform our churches and communities. Don't wait for tomorrow to make a difference - God wants to use you right now to advance His kingdom. Together, we can reach every young person in Rwanda with the hope of Jesus!"
          </blockquote>
          
          <footer className="text-right">
            <cite className="text-xl font-semibold text-gray-800 block">- Pr Mg Sarah Uwineza</cite>
            <p className="text-gray-600">AY Director, Rwanda Union Mission</p>
          </footer>
        </div>
      </div>
    </section>
  )
}

export default LeaderMessage
