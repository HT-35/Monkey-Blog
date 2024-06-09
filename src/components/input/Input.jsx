import React from "react";

const Input = () => {
  return (
    <div>
      <input
        type="text"
        id="fullName"
        placeholder="Please enter your fullname"
        className="border-[1px] font-normal text-[20px] leading-[30px] placeholder:text-[#C4C4C4] border-[#999999] w-full rounded-lg outline-primary px-4 p-1 "
      />
    </div>
  );
};

export default Input;
