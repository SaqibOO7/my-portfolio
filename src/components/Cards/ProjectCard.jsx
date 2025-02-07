import React from "react";
import ModalCard from "./ModalCard"

function ProjectCard({
    title,
    Icon,
    linkG="",
    linkY="",
    linkL="",
    desc=""
}) {
  return (
    <div className="h-80 w-96 border-2 border-gray-800 rounded-2xl shadow-2xl">
      <div className="p-4">
        {Icon && <Icon className="h-16 w-16" />}
        <p className="text-xl font-semibold mt-10">{title}</p>
        <p className="text-sm mt-1">
          {desc}
        </p>
        <ModalCard 
          linkG={linkG}
          linkY={linkY}
          linkL={linkL}
        />
      </div>
    </div>
  );
}

export default ProjectCard;
