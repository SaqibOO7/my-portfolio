import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Importing custom styles for hover effect
import ToggleBtn from '../toggleButton/ToggleBtn';
import Slider from '../slider/Slider ';
import { motion } from 'framer-motion';

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

  // 🔧 Variants for parent and children
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 1.4, // Start after logo appears
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav className={`${bgColor} bg-opacity-50 backdrop-blur-md px-4 py-3 fixed top-0 w-full z-10`}>
      <div className="container mx-auto flex justify-between items-center">


        <motion.div className="text-2xl font-bold"
          initial={{ opacity: 0, x: -400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <a href="#home">
            Mohd <span className="text-shadow-coralGlow text-customBlue ">Saqib</span>
          </a>
        </motion.div>


        {/* 🧠 Animated Nav Links */}
        <motion.ul
          className="hidden md:flex space-x-8 text-lg gap-2"
          initial="hidden"
          animate="visible"
          variants={listVariants}
        >
          {/* Animated Toggle Button */}
          <motion.li variants={itemVariants}>
            <ToggleBtn />
          </motion.li>

          {/* Animated Nav Links */}
          {[
            { label: 'Home', href: '#home' },
            { label: 'About', href: '#about' },
            { label: 'Skills', href: '#skills' },
            { label: 'Projects', href: '#projects' },
            { label: 'Contact', href: '#contact' },
          ].map(({ label, href }) => (
            <motion.li key={label} variants={itemVariants}>
              <a
                href={href}
                className={`nav-link ${activeLink === href ? 'text-[#FF5733] border-b-2 border-[#FF5733]' : ''}`}
                onClick={() => setActiveLink(href)}
              >
                {label}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* ☰ Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className={`text-3xl text-customBlue transform transition-transform duration-300 ${isSliderOpen ? 'rotate-90' : 'rotate-0'
              }`}
            onClick={() => setIsSliderOpen((prev) => !prev)}
          >
            ☰
          </button>
        </div>
      </div>
      <Slider isOpen={isSliderOpen} setIsOpen={setIsSliderOpen} />
    </nav>
  );
};

export default Navbar;
