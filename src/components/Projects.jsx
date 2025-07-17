import React from 'react'

const Projects = () => {
  return (
    <div className="flex flex-col md:flex-row projey justify-center items-center gap-8 mt-20">
      
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
        <a href="https://todoprojectnitj.vercel.app/" target="_blank" rel="noopener noreferrer" className="titleofcard">
          <img className="w-full h-48 object-cover" src="/project1.png" alt="Todo Project" />
        </a>
        <div className="p-4">
          <a href="https://todoprojectnitj.vercel.app/" target="_blank" rel="noopener noreferrer" className="titleofcard">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Simple Todo Tracker</h2>
          </a>
          <p className="text-gray-600">
            A minimal and interactive To-Do tracker written in Python! 🐍<br />
            Easily create, update, and delete tasks to stay organized and productive. 🗂️🧠
          </p>
        </div>
      </div>

      
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
        <a href="https://notjustaweatherapp.netlify.app/" target="_blank" rel="noopener noreferrer" className="titleofcard">
          <img className="w-full h-48 object-cover" src="/project2.png" alt="Weather App" />
        </a>
        <div className="p-4">
          <a href="https://notjustaweatherapp.netlify.app/" target="_blank" rel="noopener noreferrer" className="titleofcard">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Weather & Horoscope App</h2>
          </a>
          <p className="text-gray-600">
            A sleek React app that shows detailed weather data and daily horoscopes 🌦️🔮<br />
            Features a frosted glass UI, responsive design, and live APIs.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Projects
