import React from "react";
//import Accordian from "../components/accordian/Accordian";

const SingUpPage = () => {
  return (
    <div className="max-w-[500px] mx-auto flex flex-col mt-5 gap-5  shadow-md bg-white p-8 rounded ">
      <div className="w-full grid grid-cols-1 place-items-center">
        <img src="./img/monkey.png" alt="" className="w-[121px]" />
        <h1 className="font-semibold text-[40px] leading-[60px] text-primary">
          Monkey Blogging
        </h1>
      </div>

      <form action="#">
        <div className="grid grid-cols-1 gap-1">
          <label
            htmlFor="fullName"
            className="text-[20px] leading-[30px] font-semibold"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Please enter your fullname"
            className="border-[1px] font-normal text-[20px] leading-[30px] placeholder:text-[#C4C4C4] border-[#999999] w-full rounded-lg outline-primary px-4 p-1 "
          />
        </div>
      </form>
    </div>
  );
};

export default SingUpPage;
