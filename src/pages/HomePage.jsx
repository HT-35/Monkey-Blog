import React from "react";

const HomePage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto w-full">
      <header className="nav flex justify-between lg:text-2xl max-sm:text-base py-2 ">
        <div className="nav flex justify-center items-center gap-8 max-sm:gap-3">
          <img src="./img/monkey.png" alt="" srcset="" className="w-10" />
          <span>Home</span>
          <span>Blog</span>
          <span>Contact</span>
        </div>
        <div className="search flex justify-between gap-6">
          <input
            type="text"
            name=""
            id=""
            className="px-2 py-4 border-[1px] border-[#CFCFCF] rounded-lg"
          />
          <button className="bg-[#00B4AA] px-2 py-4 rounded-lg">Sign Up</button>
        </div>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
};

export default HomePage;
