import React from 'react'

const Projects = () => {
  return (
    <div class="flex projey justify-center items-center mt-20 ">
      <div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
        <a href="https://todoprojectnitj.vercel.app/" target='blank' class='titleofcard'><img class="w-full h-48 object-cover" src="/project1.png" alt="Card Image" /></a>
        <div class="p-4">
          <a href="https://todoprojectnitj.vercel.app/" target='blank' class='titleofcard'><h2 class="text-xl font-semibold mb-2 text-gray-800">Simple Todo Tracker
          </h2></a>
          <p class="text-gray-600">

            A minimal and interactive To-Do tracker written in Python! 🐍
            Easily create, update, and delete tasks to stay organized and productive. 🗂️🧠</p>
        </div>
      </div>
      
    </div>
  )
}

export default Projects