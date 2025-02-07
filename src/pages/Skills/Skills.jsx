import React from "react";
import SkillCard from "../../components/Cards/SkillCard";

function Skills() {

  return (
    <section id="skills" className="h-screen md:mt-0 mt-16 pt-20 px-4 md:px-5">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center">
        My <span className="text-customBlue">Skills</span>
      </h2>

      <div className="flex flex-col md:flex-row justify-evenly items-center gap-6 md:gap-10 mt-24">
        {/* Skill Card 1 */}
        <div className="w-full md:w-auto flex justify-center">
          <SkillCard children="Frontend Developer" />
        </div>

        {/* Skill Card 2 */}
        <div className="w-full md:w-auto flex justify-center">
          <SkillCard
            children="Backend Developer"
            content1="Node Js"
            content2="Express Js"
            content3="MongoDB"
            content4="SQL"
            content5="Git"
            content6="Github"
          />
        </div>

        {/* Skill Card 3 */}
        <div className="w-full md:w-auto flex justify-center">
          <SkillCard
            children="Machine Learning"
            content1="Python"
            content2="numpy"
            content3="Pandas"
            content4="Matplotlib"
            content5="TenserFlow"
            content6="Langchain"
          />
        </div>
      </div>
    </section>

  );
}
export default Skills;
