import { Button } from "components/button";
import { IconSearch } from "components/icon";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const MenuPage = (props) => {
  const navigate = useNavigate();

  const menu = [
    {
      to: "/",
      title: "Home",
    },
    {
      to: "/blog",
      title: "Blog",
    },
    {
      to: "/contact",
      title: "Contact",
    },
  ];

  return (
    <div>
      <header className="nav flex justify-between lg:text-2xl max-sm:text-base py-2 mb-2">
        <div className="nav flex justify-center items-center gap-8 max-sm:gap-3">
          <NavLink to="/">
            <img
              src="./img/monkey.png"
              alt=""
              srcSet=""
              onClick={() => navigate("/")}
              className="w-10"
            />
          </NavLink>
          <ul className="flex justify-center items-center gap-8">
            {menu.map((item) => {
              return (
                <li to={item.to}>
                  <NavLink
                    to={item.to}
                    className="cursor-pointer px-4 py-4 font-semibold"
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
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
