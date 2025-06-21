import Button from "../../components/button/Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const [headingRef, headingInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [imageRef, imageInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [textRef, textInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="about" className="h-screen pt-20 px-4 md:px-10">
      
      {/* Heading */}
      <motion.h2
        ref={headingRef}
        className="text-4xl md:text-5xl font-extrabold text-center mb-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={headingInView ? { opacity: 1, scale: 1} : {}}
        transition={{ duration: 0.6 }}
      >
        About <span className="text-customBlue">Me</span>
      </motion.h2>

      <div className="flex flex-col items-center md:flex-row justify-around gap-10 md:gap-20 h-auto mt-20">
        
        {/* Circle Image */}
        <motion.div
          ref={imageRef}
          className="order-1 md:order-none w-48 md:w-64 aspect-square border-2 border-customBlue shadow-customGlow rounded-full overflow-hidden hover:shadow-customGlowHover cursor-pointer"
          initial={{ opacity: 0, x: -120 }}
          animate={imageInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <img
            src="profile.jpg"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Text & Button */}
        <motion.div
          ref={textRef}
          className="text-center md:text-left max-w-xl order-2 md:order-none"
          initial={{ opacity: 0, y: 60 }}
          animate={textInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-bold text-2xl md:text-3xl mb-2">Full Stack Developer!</h1>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            I'm an Intermediate Web Developer with a deep passion for coding and problem-solving. Over the years, I've worked on multiple projects, from multiplayer games to expense-sharing applications. Additionally, I enjoy solving algorithmic challenges on various coding platforms, continuously improving my logical and problem-solving skills. My goal is to build software that not only works but also delivers seamless experiences to users.
          </p>
          <div>
            <a href="https://github.com/SaqibOO7">
              <Button children="Click Me" className="w-32" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
