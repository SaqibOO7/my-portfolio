import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-customBlue",
  textColor = "text-customBlack",
  boxShadow = "shadow-customGlow",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-3 py-2 rounded-3xl font-semibold border-2 border-customBlue
         ${boxShadow} ${bgColor} ${textColor} ${className} hover:shadow-customGlowHover hover:border-customBlue transform transition-transform duration-300 hover:scale-105 will-change-transform overflow-hidden`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
