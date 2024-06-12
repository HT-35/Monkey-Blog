import Input from "components/input";
import Label from "components/label";
import { ShowProvider } from "contexts/showContext";
import React from "react";

import { useForm } from "react-hook-form";

const SingUpPage = () => {
  const { handleSubmit, control, reset } = useForm();

  return (
    <ShowProvider>
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
        >
          <ShowProvider>
            <div className="grid grid-cols-1 gap-1">
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
          </ShowProvider>

          <div className="w-full flex justify-center mt-5">
            <button
              type="submit"
              className="btn-search  w-[250px] select-none text-white font-semibold rounded-lg active:text-black"
            >
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </ShowProvider>
  );
};

export default SingUpPage;
