import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Importing custom styles for hover effect
import ToggleBtn from '../toggleButton/ToggleBtn';
import Slider from '../slider/Slider ';

const Navbar = ({ bgColor }) => {
  const [activeLink, setActiveLink] = useState('#home');
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['#home', '#about', '#eduction', '#skills', '#projects', '#contact'];
      sections.forEach((section) => {
        const element = document.querySelector(section);
        if (element && element.getBoundingClientRect().top < window.innerHeight / 2) {
          setActiveLink(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${bgColor} bg-opacity-50 backdrop-blur-md px-4 py-3 fixed top-0 w-full z-10`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#home">
            Mohd <span className="text-shadow-coralGlow text-customBlue ">Saqib</span>
          </a>
        </div>
        <ul className="hidden md:flex space-x-8 text-lg gap-2">
          <ToggleBtn />
          <li>
            <a
              href="#home"
              className={`nav-link ${activeLink === '#home' ? 'text-[#FF5733] border-b-2 border-[#FF5733]' : ''
                }`}
              onClick={() => setActiveLink('#home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`nav-link ${activeLink === '#about' ? 'text-[#FF5733] border-b-2 border-[#FF5733]' : ''
                }`}
              onClick={() => setActiveLink('#about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`nav-link ${activeLink === '#skills' ? 'text-[#FF5733] border-b-2 border-[#FF5733]' : ''
                }`}
              onClick={() => setActiveLink('#skills')}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`nav-link ${activeLink === '#projects' ? 'text-[#FF5733] border-b-2 border-[#FF5733]' : ''
                }`}
              onClick={() => setActiveLink('#projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`nav-link ${activeLink === '#contact' ? 'text-[#FF5733] border-b-2 border-[#FF5733]' : ''
                }`}
              onClick={() => setActiveLink('#contact')}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="md:hidden">
          {/* Hamburger Button */}
          <button
            className={`text-3xl text-customBlue transform transition-transform duration-300 ${isSliderOpen ? 'rotate-90' : 'rotate-0'
              }`}
            onClick={() => setIsSliderOpen((prev) => !prev)}
          >
            ☰
          </button>
        </div>
      </div>
      <Slider isOpen={isSliderOpen} setIsOpen={setIsSliderOpen}/>
    </nav>
  );
};

export default Navbar;
