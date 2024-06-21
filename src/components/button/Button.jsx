import { LoadingSpinner } from "components/loadding";
import React from "react";

import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Button = ({
  type = "button",
  onClick = () => {},
  children,
  disabled,
  isloading,
  className,
  to,
  ...props
}) => {
  const child = isloading ? <LoadingSpinner /> : children;
  console.log(to);

  // eslint-disable-next-line valid-typeof
  if (to && typeof to === "string") {
    return (
      <NavLink to={to} className="inline-block w-[300px] h-[50px]">
        <button
          type={type}
          onClick={onClick}
          {...props}
          className={
            className
              ? className
              : `btn-search w-full mx-auto h-full select-none text-white font-semibold rounded-lg active:text-black 
			${disabled ? "opacity-50 pointer-events-none" : ""}
			`
          }
        >
          <span className="flex justify-center align-center w-full">
            {child}
          </span>
        </button>
      </NavLink>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      {...props}
      className={
        className
          ? className
          : `btn-search  w-[300px] mx-auto h-[50px] select-none text-white font-semibold rounded-lg active:text-black 
			${disabled ? "opacity-50 pointer-events-none" : ""}
			`
      }
    >
      <span className="flex justify-center align-center w-full">{child}</span>
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isloading: PropTypes.bool,
  props: PropTypes.object,
};

export default Button;
