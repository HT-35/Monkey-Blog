import React from "react";

import PropTypes from "prop-types";

const Label = ({ htmlFor, children, ...props }) => {
  return (
    <>
      <label
        htmlFor={htmlFor}
        //className="text-[20px] leading-[30px] font-semibold"
        {...props}
      >
        {children}
      </label>
    </>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string,
  children: PropTypes.string,
  props: PropTypes.object,
};

export default Label;
