import React from 'react'
import './Navbar.css'

const Webdev = () => {
  return (
    <div className="flex justify-between mt-8 sm:mt-8 min-h-screen px-[10%]">
      <div className="w-2/5 md:w-3/10 flex flex-col items-center gap-4">
        <div className='text-white'>
          Route 1
        </div>
        <div className="webdevy flex justify-center w-4/5 h-[65px] sm:h-[120px] sm:w-2/5 border-4 border-white"><img className='md:w-[100px] h-auto' src="/htmllogo.svg" alt="" /></div>
        <div className="webdevy flex justify-center w-4/5 h-[65px] sm:h-[120px] sm:w-2/5 border-4 border-white"><img className='md:w-[100px] h-auto' src="/pythonlogo.svg" alt="" /></div>
        <div className="webdevy flex justify-center w-4/5 h-[65px] sm:h-[120px] sm:w-2/5 border-4 border-white"><img className='md:w-[100px] h-auto' src="/flasklogo.svg" alt="" /></div>
        <div className="webdevy flex justify-center w-4/5 h-[65px] sm:h-[120px] sm:w-2/5 border-4 border-white"><img className='md:w-[100px] h-auto' src="/csslogo.svg" alt="" /></div>
      </div>
      <div className="w-2/5 md:w-3/10 flex flex-col items-center gap-4">
        <div className='text-white'>
          Route 2
        </div>
        <div className="webdevy flex justify-center w-4/5 h-[65px] sm:h-[120px] sm:w-2/5 border-4 border-white"><img className='md:w-[100px] h-auto' src="/htmllogo.svg" alt="" /></div>
        <div className="webdevy flex justify-center w-4/5 h-[65px] sm:h-[120px] sm:w-2/5 border-4 border-white"><img className='md:w-[100px] h-auto' src="/jslogo.svg" alt="" /></div>
        <div className="webdevy flex justify-center w-4/5 h-[65px] sm:h-[120px] sm:w-2/5 border-4 border-white"><img className='md:w-[100px] h-auto' src="/mongodb.svg" alt="" /></div>
        <div className="webdevy flex justify-center w-4/5 h-[65px] sm:h-[120px] sm:w-2/5 border-4 border-white"><img className='md:w-[100px] h-auto' src="/expressjslogo.svg" alt="" /></div>
        <div className="webdevy flex justify-center w-4/5 h-[65px] sm:h-[120px] sm:w-2/5 border-4 border-white"><img className='md:w-[100px] h-auto' src="/reactlogo.svg" alt="" /></div>
        <div className="webdevy flex justify-center w-4/5 h-[65px] sm:h-[120px] sm:w-2/5 border-4 border-white"><img className='md:w-[100px] h-auto' src="/tailwindlogo.svg" alt="" /></div>
        <div className="webdevy flex justify-center w-4/5 h-[65px] sm:h-[120px] sm:w-2/5 border-4 border-white"><img className='md:w-[100px] h-auto' src="/nodejslogo.svg" alt="" /></div>
        <div className="webdevy flex justify-center w-4/5 h-[65px] sm:h-[120px] sm:w-2/5 border-4 border-white"><img className='md:w-[100px] h-auto' src="/csslogo.svg" alt="" /></div>
      </div>
    </div>
  )
}

export default Webdev
