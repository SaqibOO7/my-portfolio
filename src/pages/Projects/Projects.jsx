import React from "react";
import { TbTicTac, TbMessage } from "react-icons/tb";
import { ImYoutube } from "react-icons/im";
import ProjectCard from "../../components/Cards/ProjectCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Projects() {
  const [headingRef, headingInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [cardsRef, cardsInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.3 },
    }),
  };

  const projectData = [
    {
      title: "Multi-player game",
      Icon: TbTicTac,
      linkG: "https://github.com/SaqibOO7/Tic-Tac-Toe-Game",
      linkY: "https://www.youtube.com/watch?v=SDRxCHQ-fV0&ab_channel=PeterPeter",
      linkL: "https://tic-tac-toe-game-prod.onrender.com/",
      desc: "A real-time multiplayer Tic Tac Toe game built with MERN stack and Socket.io. Users can create or join game rooms and compete with friends in an interactive lobby system."
    },
    {
      title: "Chat-Application",
      Icon: TbMessage,
      linkG: "https://github.com/SaqibOO7/Chat-Application-with-MERN",
      linkY: "https://www.youtube.com/watch?v=RxK15x-bTKU&ab_channel=PeterPeter",
      linkL: "https://chat-application-deployment.onrender.com/",
      desc: "A real-time chat application with a modern and visually appealing UI, built using React, Node.js, Express, and Socket.io. Supports seamless one-on-one messaging with instant updates."
    },
    {
      title: "You-Tube Backend",
      Icon: ImYoutube,
      linkG: "https://github.com/SaqibOO7/YouTube-Backend",
      linkY: "https://github.com/SaqibOO7/YouTube-Backend",
      linkL: "https://github.com/SaqibOO7/YouTube-Backend",
      desc: "A YouTube-like backend built with Node.js, Express, and MongoDB. Features video uploads, user authentication, comments, and likes, providing a scalable foundation for a video-sharing platform."
    }
  ];

  return (
    <section id="projects" className="h-screen md:mt-0 mt-96 pt-20 px-4 md:px-5">
      
      <motion.h2
        ref={headingRef}
        className="text-4xl md:text-5xl font-extrabold text-center mb-10"
        initial={{ opacity: 0, y: -100 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-customBlue">Projects</span>
      </motion.h2>

      <div
        ref={cardsRef}
        className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mt-12"
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="w-full md:w-auto flex justify-center"
            custom={index}
            initial="hidden"
            animate={cardsInView ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
