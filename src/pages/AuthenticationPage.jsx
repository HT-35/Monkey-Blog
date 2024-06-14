import React from "react";

const AuthenticationPage = ({ children }) => {
  return (
    <div className="max-w-[600px] mx-auto flex flex-col  gap-3   bg-white p-6 rounded ">
      <div className="w-full grid grid-cols-1 place-items-center">
        <img src="./img/monkey.png" alt="" className="w-[80px]" />
        <h1 className="font-semibold text-3xl leading-[60px] text-primary">
          Monkey Blogging
        </h1>
      </div>
      {children}
    </div>
  );
};

export default AuthenticationPage;
