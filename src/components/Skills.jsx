import { Link } from 'react-router';
import './Navbar.css'
const Skills = () => {
  return (
    <div className="relative flex justify-center items-center md:mt-20">
      <div className="relative w-full max-w-[800px]">
        <img
          className="w-full h-auto"
          src="/Morpheus.png"
          alt="Morpheus"
        />
        <div className="absolute redpill" style={{
          top: '77%',
          left: '10.5%',
          width: '16%',
        }}>
          <Link to="/nondev">
            <img
              src="/redpill.png"
              alt="Red Pill"
              className="w-full h-auto"
            />
          </Link>
        </div>

        <div className="absolute bluepill" style={{
          top: '77%',
          right: '9.5%',
          width: '17%',
        }}> <Link to="/webdev">
            <img
              src="/bluepill.png"
              alt="Blue Pill"
              className="w-full h-auto"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Skills;