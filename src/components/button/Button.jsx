import { LoadingSpinner } from "components/loadding";
import React from "react";

const Button = ({
  type = "button",
  onClick = () => {},
  children,
  disabled,
  ...props
}) => {
  const { isloading } = props;

  const child = isloading === "true" ? <LoadingSpinner /> : children;

  return (
    <button
      type={type}
      onClick={onClick}
      {...props}
      className={`btn-search  w-[300px] mx-auto h-[50px] select-none text-white font-semibold rounded-lg active:text-black 
			${disabled ? "opacity-50 pointer-events-none" : ""}
			`}
    >
      <span className="flex justify-center align-center w-full">{child}</span>
    </button>
  );
};

export default Button;
