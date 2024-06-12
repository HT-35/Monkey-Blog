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
  console.log("activeShow:", activeShow);
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
        type={type}
        id={name}
        className={`border-[1px] font-normal text-[20px] leading-[30px] placeholder:text-[#C4C4C4] border-[#999999] w-full rounded-lg outline-primary px-4 
        ${hasIcon ? "px-2 pr-8 py-2" : "p-2"}`}
        {...props}
        {...field}
      />
      {/*{hasIcon ? (
        <IconEyeOpen
          className="absolute right-2 top-[50%] -translate-y-[50%] 
        hover:cursor-pointer "
        ></IconEyeOpen>
      ) : null}*/}
      {show ? (
        <IconEyeOpen
          className="absolute right-2 top-[50%] -translate-y-[50%] 
        hover:cursor-pointer "
          onClick={activeShow((show) => !show)}
        ></IconEyeOpen>
      ) : (
        <IconEyeClose
          className="absolute right-2 top-[50%] -translate-y-[50%] 
        hover:cursor-pointer "
          onClick={activeShow((show) => !show)}
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
