import { LoadingSpinner } from "components/loadding";
import React from "react";

import PropTypes from "prop-types";

const Button = ({
  type = "button",
  onClick = () => {},
  children,
  disabled,
  isloading,
  ...props
}) => {
  const child = isloading ? <LoadingSpinner /> : children;

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

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.string,
  disabled: PropTypes.bool,
  isloading: PropTypes.bool,
  props: PropTypes.object,
};

export default Button;
