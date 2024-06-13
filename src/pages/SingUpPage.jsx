import { IconEyeClose, IconEyeOpen } from "components/icon";
import Input from "components/input";
import Label from "components/label";

import React, { useState } from "react";

import { useForm } from "react-hook-form";

const SingUpPage = () => {
  const { handleSubmit, control, reset } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  console.log("showPassword:", showPassword);

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div>
      <div className="max-w-[600px] mx-auto flex flex-col  gap-3   bg-white p-6 rounded ">
        <div className="w-full grid grid-cols-1 place-items-center">
          <img src="./img/monkey.png" alt="" className="w-[80px]" />
          <h1 className="font-semibold text-3xl leading-[60px] text-primary">
            Monkey Blogging
          </h1>
        </div>

        <form
          action="#"
          onSubmit={handleSubmit((data) => {
            console.log(data);
            setTimeout(() => {
              reset({
                fullName: "",
              });
            }, 100);
          })}
          className="grid grid-cols-1 gap-4"
        >
          <div>
            <div className="field-input">
              <Label
                htmlFor="fullName"
                className="text-[20px] leading-[30px] font-semibold select-none"
              >
                Full Name
              </Label>
              <Input
                control={control}
                name="fullName"
                type="text"
                id="fullName"
                placeholder="Please enter your fullname"
              ></Input>
            </div>
          </div>

          <div>
            <div className="field-input">
              <Label
                htmlFor="EmailAddress"
                className="text-[20px] leading-[30px] font-semibold select-none"
              >
                Email Address
              </Label>
              <Input
                control={control}
                name="EmailAddress"
                type="email"
                id="EmailAddress"
                placeholder="Please enter your email address"
              ></Input>
            </div>
          </div>

          <div>
            <div className="field-input">
              <Label
                htmlFor="EmailAddress"
                className="text-[20px] leading-[30px] font-semibold select-none"
              >
                Password
              </Label>
              <Input
                control={control}
                name="Password"
                //type="password"
                type={showPassword ? "text" : "password"}
                id="Password"
                placeholder="Please enter your email address"
              >
                {!showPassword ? (
                  <div className="p-1" onClick={() => setShowPassword(true)}>
                    <IconEyeOpen></IconEyeOpen>
                  </div>
                ) : (
                  <div className="p-1" onClick={() => setShowPassword(false)}>
                    <IconEyeClose></IconEyeClose>
                  </div>
                )}
              </Input>
            </div>
          </div>

          <div className="w-full flex justify-center ">
            <button
              type="submit"
              className="btn-search  w-[250px] select-none text-white font-semibold rounded-lg active:text-black"
            >
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingUpPage;
