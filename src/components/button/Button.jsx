import React from "react";

const Button = ({
  type = "button",
  onClick = () => {},
  children,
  disabled,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      {...props}
      className={`btn-search  w-full select-none text-white font-semibold rounded-lg active:text-black
			${disabled ? "opacity-50 pointer-events-none" : ""}
			`}
    >
      {children}
    </button>
  );
};

export default Button;
