import React from "react";

function Icons({
  Icon,
  height="h-10",
  width="w-10",
  className="text-2xl"

}) {
  return (
    <div className={`flex justify-center bg-transparent border-2 border-customBlue
     text-customBlue items-center cursor-pointer rounded-full
      transition-transform duration-300 transform hover:-translate-y-2
       hover:shadow-customGlow hover:bg-customBlue hover:text-white
        ${height} ${width} ${className}`}>

      <Icon />
      
    </div>
  );
}

export default Icons;
