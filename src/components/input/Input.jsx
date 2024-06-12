import React from "react";

import PropTypes from "prop-types";
import { IconEyeClose, IconEyeOpen } from "components/icon";
import { useController } from "react-hook-form";
import { useShowContext } from "contexts/showContext";

const Input = ({
  name = "",
  type = "text",
  control,
  hasIcon = true,
  ...props
}) => {
  const { show, activeShow } = useShowContext();
  console.log("show:", show);

  const { field } = useController({
    control,
    name,
    require: true,
    defaultValue: "",
  });

  return (
    <div className={`w-full relative `}>
      <input
        //type={type || "text"}
        type={hasIcon && show ? type : "password"}
        id={name}
        className={`border-[1px] font-normal text-[20px] leading-[30px] placeholder:text-[#C4C4C4] border-[#999999] w-full rounded-lg outline-primary px-4 
        ${hasIcon ? "px-2 pr-8 py-2" : "p-2"}  select-none`}
        {...props}
        {...field}
      />

      {show ? (
        <IconEyeOpen
          className="absolute right-2 top-[50%] -translate-y-[50%]  select-none
        hover:cursor-pointer "
          onClick={activeShow}
        ></IconEyeOpen>
      ) : (
        <IconEyeClose
          className="absolute right-2 top-[50%] -translate-y-[50%]  select-none
        hover:cursor-pointer "
          onClick={activeShow}
        ></IconEyeClose>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  props: PropTypes.object,
  control: PropTypes.object,
};

export default Input;
