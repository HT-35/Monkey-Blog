import React from "react";
import PropTypes from "prop-types";

const PostCategory = ({ bgColor, children }) => {
  return (
    <div
      className={` ${
        bgColor ? bgColor : "bg-[#F3EDFF]  text-[#6B6B6B]"
      }  px-3 py-1 rounded-[10px] text-sm font-semibold max-w-[120px] text-center`}
    >
      {children}
    </div>
  );
};
PostCategory.propTypes = {
  children: PropTypes.node,
  bgColor: PropTypes.string,
};
export default PostCategory;
