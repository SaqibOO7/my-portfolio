import React from 'react';
import ToggleBtn from '../toggleButton/ToggleBtn';
import { RxCross1 } from "react-icons/rx";
import { useModeContext } from '../../context/ModeContext';

const Slider = ({ isOpen, setIsOpen }) => {

  const {theme} = useModeContext();
  return (
    <div
      className={`fixed top-0 ${theme ? "bg-black" : "bg-yellow-200"} w-64 right-0 h-screen bg-opacity-80 backdrop-blur-md z-10 transition-transform duration-700 ${isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
    >

      <div className='flex justify-between mt-3 mr-2'>
        <ToggleBtn />
        <button
          className={`text-3xl text-customBlue transform transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}
          onClick={() => setIsOpen(false)}
        >
          <RxCross1 />
        </button>
      </div>

      <div className="flex flex-col p-4 mt-10 gap-5">
        <a href="#home" className="text-xl hover:text-customBlue" onClick={() => setIsOpen(false)}>
          Home
        </a>
        <a href="#about" className="text-xl hover:text-customBlue" onClick={() => setIsOpen(false)}>
          About
        </a>
        <a href="#skills" className="text-xl hover:text-customBlue" onClick={() => setIsOpen(false)}>
          Skills
        </a>
        <a href="#projects" className="text-xl hover:text-customBlue" onClick={() => setIsOpen(false)}>
          Projects
        </a>
        <a href="#contact" className="text-xl hover:text-customBlue" onClick={() => setIsOpen(false)}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Slider;
