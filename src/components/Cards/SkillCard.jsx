import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

function SkillCard({
    children,
    content1 = "HTML",
    content2 = "CSS",
    content3 = "JavaScript",
    content4 = "Tailwind Css",
    content5 = "React Js",
    content6 = "Redux",
}) {
  return (
    <div className='h-64 w-72 border-2 text-white border-gray-700 rounded-3xl cursor-pointer bg-black hover:shadow-customGlowHover hover:border-customBlue transform transition-transform duration-300 hover:scale-105 will-change-transform overflow-hidden'>
      <p className='text-center font-bold p-2'>{children}</p>
      <div className='grid grid-rows-3 grid-cols-2 gap-x-3 items-center p-2 ml-2'>
        <p className='flex h-16 p-2 items-center gap-2'><FaCheckCircle />{content2}</p>
        <p className='flex h-16 p-2 items-center gap-2'><FaCheckCircle />{content3}</p>
        <p className='flex h-16 p-2 items-center gap-2'><FaCheckCircle />{content4}</p>
        <p className='flex h-16 p-2 items-center gap-2'><FaCheckCircle />{content1}</p>
        <p className='flex h-16 p-2 items-center gap-2'><FaCheckCircle />{content5}</p>
        <p className='flex h-16 p-2 items-center gap-2'><FaCheckCircle />{content6}</p>
      </div>
    </div>
  )
}

export default SkillCard
