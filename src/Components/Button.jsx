import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({
  color = "primary",
  variant = "filled",
  children,
  className,
}) => {
  const colors = {
    primary:
      "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 border-blue-700",
    success:
      "bg-green-700 hover:bg-green-800 focus:ring-green-300 border-green-700",
      danger:
      "bg-red-700 hover:bg-purple-700 focus:ring-green-300 border-green-700",
      david:
      "bg-yellow-600 hover:bg-yellow-800 focus:ring-green-300 border-green-700"
  };

  const variants = {
    filled: "",
    outlined: "border bg-transparent",
  };
  return (
    <div>
        <button
      className={twMerge(
        "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none",
        colors[color],
        variants[variant],
        className
      )}
    >
      {children}
    </button> 

    </div>
);
};

export default Button;
