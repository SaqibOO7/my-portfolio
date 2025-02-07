import React from "react";
import { TbTicTac, TbMessage } from "react-icons/tb";
import { ImYoutube } from "react-icons/im";
import ProjectCard from "../../components/Cards/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="h-screen md:mt-0 mt-96 pt-20 px-4 md:px-5">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10">
        My <span className="text-customBlue">Projects</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mt-12">
        {/* Project Card 1 */}
        <div className="w-full md:w-auto flex justify-center">
          <ProjectCard
            title="Multi-player game"
            Icon={TbTicTac}
            linkG="https://github.com/SaqibOO7/Tic-Tac-Toe-Game"
            linkY="https://www.youtube.com/watch?v=SDRxCHQ-fV0&ab_channel=PeterPeter"
            linkL="https://tic-tac-toe-game-prod.onrender.com/"
            desc="A real-time multiplayer Tic Tac Toe game built with MERN stack and Socket.io. Users can create or join game rooms and compete with friends in an interactive lobby system."
          />
        </div>

        {/* Project Card 2 */}
        <div className="w-full md:w-auto flex justify-center">
          <ProjectCard
            title="Chat-Application"
            Icon={TbMessage}
            linkG="https://github.com/SaqibOO7/Chat-Application-with-MERN"
            linkY="https://www.youtube.com/watch?v=RxK15x-bTKU&ab_channel=PeterPeter"
            linkL="https://chat-application-deployment.onrender.com/"
            desc="A real-time chat application with a modern and visually appealing UI, built using React, Node.js, Express, and Socket.io. Supports seamless one-on-one messaging with instant updates."
          />
        </div>

        {/* Project Card 3 */}
        <div className="w-full md:w-auto flex justify-center">
          <ProjectCard
            title="You-Tube Backend"
            Icon={ImYoutube}
            linkG="https://github.com/SaqibOO7/YouTube-Backend"
            linkY="https://github.com/SaqibOO7/YouTube-Backend"
            linkL="https://github.com/SaqibOO7/YouTube-Backend"
            desc="A YouTube-like backend built with Node.js, Express, and MongoDB. Features video uploads, user authentication, comments, and likes, providing a scalable foundation for a video-sharing platform."
          />
        </div>
      </div>
    </section>

  );
}

export default Projects;
