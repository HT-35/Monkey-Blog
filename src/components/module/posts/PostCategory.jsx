import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const PostCategory = ({ bgColor, children, to = "/" }) => {
  return (
    <NavLink to={to} className=" max-w-[120px]">
      <div
        className={` ${
          bgColor ? bgColor : "bg-[#F3EDFF]  text-[#6B6B6B]"
        }  px-3 py-1 rounded-[10px] text-sm font-semibold  w-full text-center`}
      >
        {children}
      </div>
    </NavLink>
  );
};
PostCategory.propTypes = {
  children: PropTypes.node,
  bgColor: PropTypes.string,
};
export default PostCategory;
