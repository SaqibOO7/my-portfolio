import React from "react";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";
import { SiGeeksforgeeks } from "react-icons/si";
import Button from "./components/button/Button";
import Icons from "./components/Icons";
import { useModeContext } from "./context/ModeContext";
import { ReactTyped } from "react-typed";

function App() {

  const { theme } = useModeContext();
  return (
    <div className={theme ? "" : "bg-yellow-200 text-customBlack"}>
      <Navbar bgColor={theme ? "bg-customBlack" : "bg-yellow-200"} />
      {/* HERO SECTION */}
      <div id="home" className="flex flex-col-reverse md:flex-row justify-around gap-8 md:gap-16 items-center h-screen px-5">
        {/* Text Section */}
        <div className="flex flex-col gap-2 max-w-xl">
          <h1 className="font-extrabold text-4xl md:text-5xl">Hi, It's <span className="text-customBlue">Saqib</span></h1>

          <h1 className="font-bold text-2xl md:text-3xl">I'm a{" "}
            <span className="text-customBlue">
              <ReactTyped
                strings={["Frontend Developer",
                  "Backend Developer",
                  "Full-Stack Developer",
                  "Software Developer",
                  "Problem Solver",
                  "Web Developer"
                ]}
                typeSpeed={50}
                backSpeed={50}
                backDelay={1200}
                loop
              />
            </span>
          </h1>

          <p className="mb-2 text-sm md:text-base">
            A passionate Full-Stack Developer with expertise in React.js, Node.js, and MongoDB. I love crafting elegant, scalable, and user-friendly web applications. With a strong foundation in problem-solving, I bring ideas to life in the digital world.
          </p>
          <div className="flex gap-4 mt-4 ml-1">
            <a href="https://www.linkedin.com/in/mohd-saqib-5412732a9/"><Icons Icon={FaLinkedin} /></a>
            <a href="https://github.com/SaqibOO7"><Icons Icon={FaGithub} /></a>
            <a href="https://leetcode.com/u/BhaiSaqib121/"><Icons Icon={TbBrandLeetcode} /></a>
            <a href="https://www.geeksforgeeks.org/user/peter8xp78/"><Icons Icon={SiGeeksforgeeks} /></a>
          </div>
          <div className="flex gap-3 mt-3">
            <a href="#contact"><Button className="w-24" children="Contact" /></a>
            <a href="/resume.pdf" download="resume.pdf">
              <Button className={`w-36 hover:text-customBlack hover:bg-customBlue ${theme ? "" : "bg-yellow-200"}`}
                children="Download cv"
                bgColor="bg-customBlack"
                textColor="text-customBlue"
                boxShadow=""
              />
            </a>
          </div>
          <a href="#home">
            <button className="fixed bottom-6 right-6 bg-customBlue text-customBlack p-3 rounded-lg hover:shadow-customGlow">
              <FaArrowUp />
            </button>
          </a>
        </div>

        {/* Photo Section */}
        <div className="relative mt-20 md:mt-0 w-48 md:w-72 aspect-square border-4 border-customBlue shadow-customGlow rounded-full overflow-hidden hover:shadow-customGlowHover cursor-pointer">
          <img
            src="profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>


      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className={`flex flex-col justify-center items-center gap-5 h-36 ${theme ? "bg-customBlack2" : "bg-yellow-300"} `}>
        <div className="flex text-sm gap-3 mt-2">
          <a href="https://www.linkedin.com/in/mohd-saqib-5412732a9/"><Icons Icon={FaLinkedin} height="h-9" width="w-9" className="text-lg" /></a>
          <a href="https://github.com/SaqibOO7"><Icons Icon={FaGithub} height="h-9" width="w-9" className="text-lg" /></a>
          <a href="https://leetcode.com/u/BhaiSaqib121/"> <Icons Icon={TbBrandLeetcode} height="h-9" width="w-9" className="text-lg" /></a>
          <a href="https://www.geeksforgeeks.org/user/peter8xp78/"> <Icons Icon={SiGeeksforgeeks} height="h-9" width="w-9" className="text-lg" /></a>
        </div>
        <p className="text-sm font-semibold">Mohd Saqib | All Rights Reserverd</p>
      </footer>
    </div>
  );
}

export default App;
