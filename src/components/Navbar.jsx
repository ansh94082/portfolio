import { React, useState } from 'react';
import { Link } from 'react-router';
import './Navbar.css';
import Hamburgersvg from '/hamburger_white.svg'
import MyContext from './Mycontext';



const Navbar = () => {

  const [hamburgerClick, setHamburgerClick] = useState(false);

  const toggleClick = () => {
    setHamburgerClick(!hamburgerClick)
  }




  return (

    <MyContext.Provider value={{ hamburgerClick, toggleClick }}>

      <nav className="navbar ">


        <div className='flex justify-between block md:hidden'>

          <ul className="nav-links">
            <li><Link to="/">Ansh</Link></li>
          </ul>

          <img className='hamburgersvgcss' src={Hamburgersvg} onClick={toggleClick} alt="hamburger" />

        </div>

        <div className="flex justify-between items-center w-full hidden md:flex">

          <ul className="nav-links">
            <li><Link to="/"><img src="/coding.svg" className='max-w-[40px]' alt="" /></Link></li>
          </ul>

          <ul className="nav-links">
            <li><Link to="/">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {hamburgerClick && (
          <div 
            style={{
              position: 'fixed',
              borderRadius: 21,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgb(11, 53, 20)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'


            }}


          

             className="flex overflow-hidden items-center justify-between text-white rounded space-x-8">
              <ul className="nav-links flex space-x-8 list-none m-0 p-0">
                <li><Link to="/">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
              <img
                className="h-4 w-4 cursor-pointer ml-4"
                src={'/remove-white.webp'}
                alt="Close menu"
                onClick={toggleClick}
              />
            </div>

        

        )}

      </nav>
    </MyContext.Provider>

  );
};


export default Navbar;
