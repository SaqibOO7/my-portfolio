import React, { useId } from "react";
import { useModeContext } from "../../context/ModeContext";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", rows="4", ...props },
  ref
) {
  const id = useId();
  const {theme} = useModeContext();

  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}

      {type === "textarea" ? (
        <textarea
          className={`px-3 py-2 rounded-2xl ${theme ? "bg-customBlack" : "bg-yellow-200" } outline-none border-2 border-customBlue w-full resize-none ${className}`}
          ref={ref}
          id={id}
          rows={rows} // Use rows prop for textarea
          {...props}
        />
      ) : (
        <input
          type={type}
          className={`px-3 py-2 rounded-xl ${theme ? "bg-customBlack" : "bg-yellow-200"} outline-none border-2 border-customBlue w-full ${className}`}
          ref={ref}
          id={id}
          {...props}
        />
      )}
    </div>
  );
});

export default Input;
