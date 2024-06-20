import { Button } from "components/button";
import { IconSearch } from "components/icon";
import React from "react";
import { useNavigate } from "react-router-dom";

const MenuPage = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <header className="nav flex justify-between lg:text-2xl max-sm:text-base py-2 mb-2">
        <div className="nav flex justify-center items-center gap-8 max-sm:gap-3">
          <img src="./img/monkey.png" alt="" srcSet="" className="w-10" />
          <ul className="flex justify-center items-center gap-8">
            <li
              onClick={() => navigate("/")}
              className="cursor-pointer px-4 py-4 font-semibold"
            >
              Home
            </li>
            <li
              onClick={() => navigate("/Blog")}
              className="cursor-pointer px-4 py-4 font-semibold"
            >
              Blog
            </li>
            <li
              onClick={() => navigate("/Contact")}
              className="cursor-pointer px-4 py-4 font-semibold"
            >
              Contact
            </li>
          </ul>
        </div>
        <div className="search flex justify-between gap-6">
          <div className="relative ">
            <input
              type="text"
              name=""
              id=""
              className="px-3 py-4 border-[1px] border-[#CFCFCF] rounded-lg pr-14"
              placeholder="Search posts..."
            />
            <div className="absolute top-[50%] -translate-y-[50%] right-0 px-4 ">
              <IconSearch></IconSearch>
            </div>
          </div>
          <Button
            type="submit"
            className="bg-[#00B4AA] px-2 py-2 rounded-lg w-[191px] font-semibold"
          >
            Sign Up
          </Button>
        </div>
      </header>
      {props.children}
    </div>
  );
};

export default MenuPage;
