import Button from "components/button/Button";
import { IconEyeClose, IconEyeOpen } from "components/icon";
import Input from "components/input";
import Label from "components/label";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

// validate form
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//Schema validate form

const schema = yup.object({
  fullName: yup.string().required("m nhap đầy đủ họ và tên  !"),
  EmailAddress: yup.string().required("nhập email đi"),
  Password: yup.string().required("mật khẩu nữa"),
});

const SingUpPage = () => {
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);

  function handleSignUp(data) {
    console.log(data);
    if (!isValid) return;
    // vì quá trình submit quá nhanh nên làm vậy để kéo dài thời gian và test loading
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
  }

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
          className="grid grid-cols-1 gap-4 place-content-center"
          onSubmit={handleSubmit(handleSignUp)}
        >
          <div className="field-input">
            <Label
              htmlFor="fullName"
              className="text-[20px] leading-[30px] font-semibold select-none"
            >
              Full Name
            </Label>
            <Input
              control={control}
              errors={errors}
              name="fullName"
              type="text"
              id="fullName"
              placeholder="Please enter your fullname"
            ></Input>
          </div>

          <div className="field-input">
            <Label
              htmlFor="EmailAddress"
              className="text-[20px] leading-[30px] font-semibold select-none"
            >
              Email Address
            </Label>
            <Input
              control={control}
              errors={errors}
              name="EmailAddress"
              type="email"
              id="EmailAddress"
              placeholder="Please enter your email address"
            ></Input>
          </div>

          <div className="field-input">
            <Label
              htmlFor="EmailAddress"
              className="text-[20px] leading-[30px] font-semibold select-none"
            >
              Password
            </Label>
            <Input
              control={control}
              errors={errors}
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

          {/*<Button type="submit" disabled={true} isloading={true}>*/}
          <Button
            type="submit"
            disabled={isSubmitting}
            isloading={isSubmitting.toString()}
          >
            SIGN UP
            {/*<LoaddingSpinner></LoaddingSpinner>*/}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SingUpPage;
