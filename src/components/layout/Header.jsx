import { Button } from "components/button";
import { IconSearch } from "components/icon";
import { useAuth } from "contexts/authContext";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();

  const { userInfo } = useAuth();

  function getLastName(name) {
    if (!name) return "User";

    // split(' ') tách từng từ theo ' ' và gom tất cả vào mảng, sao đó .length là lấy vị trí
    const length = name?.split(" ").length;
    console.log("length:", length);
    // split(' ') tách từng từ theo ' ' và gom chúng vào mảng, sao đó lấy ra vị trí cuối cùng của mảng bằng length-1
    return name?.split(" ")[length - 1];
  }

  //console.log(getLastName("Tran Quang Huy"));

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
      <header className="nav flex justify-between lg:text-2xl max-sm:text-base py-2 mb-3">
        <div className="nav flex justify-center items-center gap-2 ">
          <NavLink to="/">
            <img
              src="./img/monkey.png"
              alt=""
              srcSet=""
              onClick={() => navigate("/")}
              className="w-10"
            />
          </NavLink>
          <ul className="flex justify-center items-center gap-3">
            {menu.map((item, index) => {
              return (
                <li key={index} to={item.to}>
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
        <div className="search flex justify-between gap-4">
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

          {!userInfo ? (
            <Button
              type="submit"
              to="/sign-up"
              className="bg-[#00B4AA] px-2 py-1 rounded-lg w-[191px] font-semibold"
            >
              Sign Up
            </Button>
          ) : (
            <div className="flex  items-center">
              <span>welcome back, </span>
              <strong>{getLastName(userInfo?.displayName)}</strong>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
