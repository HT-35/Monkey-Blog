import React from "react";
import PropTypes from "prop-types";

const Heading = ({ children, className = "" }) => {
  return (
    <div className="heading-title">
      <div className="absolute w-[35px] top-0 h-[3px] rounded-lg bg-[#00D1ED]"></div>
      {children}
    </div>
  );
};

Heading.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default Heading;
