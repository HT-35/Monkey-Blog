import React from "react";

import PropTypes from "prop-types";

const Label = ({ htmlFor, title }) => {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className="text-[20px] leading-[30px] font-semibold"
      >
        {title}
      </label>
    </>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string,
  title: PropTypes.string,
};

export default Label;
