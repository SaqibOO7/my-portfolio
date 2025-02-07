import React from "react";
import Button from "../../components/button/Button";

function About() {
  return (

    <section id="about" className="h-screen pt-20 px-4 md:px-10">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10">
        About <span className="text-customBlue">Me</span>
      </h2>

      <div className="flex flex-col items-center md:flex-row justify-around gap-10 md:gap-20 h-auto mt-20">
        {/* Circle Section */}
        <div className="order-1 md:order-none w-48 md:w-64 aspect-square border-2 border-customBlue shadow-customGlow rounded-full overflow-hidden hover:shadow-customGlowHover cursor-pointer">
          <img
            src="profile.jpg"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left max-w-xl order-2 md:order-none">
          <h1 className="font-bold text-2xl md:text-3xl mb-2">Full Stack Developer!</h1>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            I'm an Intermediate Web Developer with a deep passion for coding and problem-solving. Over the years, I've worked on multiple projects, from multiplayer games to expense-sharing applications. Additionally, I enjoy solving algorithmic challenges on various coding platforms, continuously improving my logical and problem-solving skills. My goal is to build software that not only works but also delivers seamless experiences to users.
          </p>
          <div>
            <a href="https://github.com/SaqibOO7"><Button children="Click Me" className="w-32" /></a>
          </div>
        </div>
      </div>
    </section>

  );
}

export default About;
