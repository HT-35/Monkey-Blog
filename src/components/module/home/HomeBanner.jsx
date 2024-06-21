import { Button } from "components/button";
import React from "react";

const HomeBanner = () => {
  return (
    <div className="w-full h-[600px] bg-gradient-to-br from-[#00B4AA] to-[#A4D96C] flex flex-row  pt-10 px-10">
      <div className="basis-1/3 content text-white flex flex-col gap-8 ">
        <h1 className="text-[48px] font-bold">Monkey Blogging</h1>
        <p className="text-sm ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p>
        <Button
          type="button"
          to="/sign-in"
          className="bg-white py-4 px-11 text-[#23BB86] text-lg w-[300px] h-[80px]  rounded-lg"
        >
          Get Started
        </Button>
      </div>
      <div className="img basis-2/3 flex justify-center">
        <img src="./img/money.png" alt="" srcSet="" className="w-full" />
      </div>
    </div>
  );
};

export default HomeBanner;
