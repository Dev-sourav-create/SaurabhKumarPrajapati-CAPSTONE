import React from "react";

const Card = ({ children, className = "", padding = "md" }) => {
  const paddings = {
    none: "",
    sm: "p-3 sm:p-4 lg:p-5",
    md: "p-4 sm:p-6 lg:p-10",
    lg: "p-5 sm:p-8 lg:p-12",
  };

  return (
    <div
      className={`
        inline-block
        my-6
        rounded-2xl
        border
        mx-3
        border-gray-200
        bg-white
        shadow-sm
        ${paddings[padding]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
