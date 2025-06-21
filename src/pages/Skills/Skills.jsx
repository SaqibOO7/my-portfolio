import React from "react";
import SkillCard from "../../components/Cards/SkillCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Skills() {
  const [headingRef, headingInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [cardsRef, cardsInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2, // Staggered delay
      },
    }),
  };

  return (
    <section id="skills" className="h-screen md:mt-0 mt-16 pt-20 px-4 md:px-5">
      
      {/* Heading Animation */}
      <motion.h2
        ref={headingRef}
        className="text-4xl md:text-5xl font-extrabold text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={headingInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-customBlue">Skills</span>
      </motion.h2>

      {/* Skill Cards Container */}
      <div
        ref={cardsRef}
        className="flex flex-col md:flex-row justify-evenly items-center gap-6 md:gap-10 mt-24"
      >
        {[ 
          { title: "Frontend Developer" },
          {
            title: "Backend Developer",
            content: ["Node Js", "Express Js", "MongoDB", "SQL", "Git", "Github"],
          },
          {
            title: "Machine Learning",
            content: ["Python", "numpy", "Pandas", "Matplotlib", "TenserFlow", "Langchain"],
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="w-full md:w-auto flex justify-center"
            custom={index}
            initial="hidden"
            animate={cardsInView ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <SkillCard
              children={item.title}
              content1={item.content?.[0]}
              content2={item.content?.[1]}
              content3={item.content?.[2]}
              content4={item.content?.[3]}
              content5={item.content?.[4]}
              content6={item.content?.[5]}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
