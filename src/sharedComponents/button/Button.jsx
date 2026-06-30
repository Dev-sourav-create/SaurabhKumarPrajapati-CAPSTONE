import React from "react";
import { buttonVariants, buttonSizes } from "./ButtonVariants";
export const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  className = "",
  onClick,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-lg
        font-semibold
        transition-all
        duration-200
        focus:outline-none
        disabled:cursor-not-allowed

        ${buttonVariants[variant]}
        ${buttonSizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
