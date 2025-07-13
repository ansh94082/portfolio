import React from 'react'
import MyImage from '../assets/mainimg.png'

const About = () => {
  return (
    <div className=" w-full overflow-x-hidden">
      <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12 p-4">
        <img
          src={MyImage}
          alt="The Main Character"
          className="w-60 sm:w-76 mt-4 sm:mt-[3vh] h-auto object-cover rounded-full hover:rounded-[30%] transition-all duration-500 ease-in-out"
        />

        <div className="flex flex-col text-center sm:text-left px-4 sm:px-0 max-w-full">
          <br />
          <h1 className="text-[40px] text-green-300 sm:text-[80px] font-[rakkas] m-0 leading-none break-words">
            Ansh Sharma
          </h1>
          <h2 className="text-[24px] text-green-200 sm:text-[23px] font-sans mt-[-5px] sm:mt-[-10px] text-green-200  leading-none font-bold break-words">
            Sophomore B.Tech M&C @ NIT Jalandhar
          </h2>
          <br />
          <p className="descripton text-white text-[18px] sm:text-[20px] font-mono leading-relaxed break-words text-left sm:text-left">
            "Hi! I’m Ansh — an 18-year-old at NIT Jalandhar, currently pursuing B.Tech in Mathematics & Computing. I’m an enthusiastic programmer who loves turning ideas into real-world solutions through code. I’m always curious about new technologies that can make life easier, and more efficient.
            Outside of coding, I’m deeply interested in finance and personal growth. I believe understanding how the world works — from money to people — helps me become not just a better programmer, but a better person.
            When I’m not at my laptop, you’ll probably find me exploring new skills or just having fun conversations with friends. Always trying to make a positive impact one line of code at a time."
          </p>
          <hr className='mt-4 h-2 border-none bg-gray-600 w-full' />
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-20 items-center sm:items-start">
            <h2 className='mt-6 text-white text-2xl font-[montserrat] font-bold'>Let's connect :-</h2>
            <div className="flex gap-7  flex-wrap justify-center sm:justify-start">
              <a className="w-[41px] mt-5 h-[41px] socialLinks" href="https://github.com/ansh94082" target="_blank" rel="noopener noreferrer"><img src="/x.svg" alt="Twitter" /></a>
              <a className="w-[47px] mt-4 h-[47px] socialLinks" href="https://www.instagram.com/__init__ansh__/" target="_blank" rel="noopener noreferrer"><img src="/instagram.svg" alt="Instagram" /></a>
              <a className="w-[54px] mt-3 h-[55px] socialLinks" href="https://www.linkedin.com/in/ansh94082/" target="_blank" rel="noopener noreferrer"><img src="/linkedin.svg" alt="LinkedIn" /></a>
              <a className="w-[54px] mt-3 h-[54px] socialLinks" href="https://github.com/ansh94082" target="_blank" rel="noopener noreferrer"><img src="/githubnew.svg" alt="GitHub" /></a>
            </div>
          </div>
          <hr className='mt-4 h-2 border-none bg-gray-600 w-full' />
        </div>
      </div>
      <div className='flex flex-col sm:flex-row '>
        <div className='sm:w-1/2 border-4 p-4 m-4 sm:p-6 sm:-6 border-white'>
          <h1 className='text-white font-black text-3xl'>Interested In :</h1>
          <h2 className='text-white'>(Web related)</h2>
          <ul className='list-disc ml-3 p-4'>
            <li className='text-white text-base font-mono '>Backend Development</li>
            <br />
            <li className='text-white text-base font-mono '>Frontend-Designing</li>
            <br />
            <li className='text-white text-base font-mono '>Web 3</li>

          </ul>
        </div>

        <div className='sm:w-1/2 border-4 p-4 m-4 sm:p-6 sm:-6 border-white'>       
        <h1 className='text-white font-black text-3xl'>Interested In :</h1>
          <h2 className='text-white'>(General)</h2>
          <ul className='list-disc ml-3 p-4'>
            <li className='text-white text-base font-mono '>Finance</li>
            <br />
            <li className='text-white text-base font-mono '>Machine-Learning</li>
            <br />
            <li className='text-white text-base font-mono '>Linux-Ricing</li>
            <br />

          </ul>
        </div>
      </div>

    </div>
  )
}

export default About
