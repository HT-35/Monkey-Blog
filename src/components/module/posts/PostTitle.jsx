import React from "react";

import PropTypes from "prop-types";

const PostTitle = ({ children, className }) => {
  return (
    <div className={` ${className ? className : "text-xl"}  font-semibold`}>
      {children}
    </div>
  );
};

PostTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default PostTitle;
