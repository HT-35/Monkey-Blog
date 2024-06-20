import { Button } from "components/button";
import React from "react";
import { NavLink } from "react-router-dom";

const NotFoudPage = () => {
  return (
    <div className="max-w-[500px] mx-auto flex  flex-col justify-center items-center mt-24  gap-5">
      <NavLink to="/" className=" flex  flex-col justify-center items-center">
        <img src="./img/monkey.png" alt="" className="w-2/3 select-none" />
      </NavLink>
      <h1 className="text-2xl font-semibold">Oops! Page not found</h1>
      <Button>Back to home</Button>
    </div>
  );
};

export default NotFoudPage;
