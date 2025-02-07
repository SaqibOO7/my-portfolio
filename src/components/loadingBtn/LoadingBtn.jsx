import React from "react";

// Note - I will make this loading button after completing all components

function LoadingBtn({
  type = "button",
  bgColor = "bg-gray-300",
  textColor = "text-gray-600",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg shadow-xl ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      Loading...
    </button>
  );
}

export default LoadingBtn;
