import { useAuth } from "contexts/authContext";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage";
import { useForm } from "react-hook-form";
import Label from "components/label";
import Input from "components/input";
import useActive from "hooks/useActive";
import { IconEyeClose, IconEyeOpen } from "components/icon";
import { Button } from "components/button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Bounce, toast } from "react-toastify";

// chema validate input
const schema = yup.object({
  email: yup.string().required("nhap email vao thang lol "),
  Password: yup
    .string()
    .min(8, "mk toi thieu 8 characters")
    .required("mat khau la gi ha dm "),
});

const SignInPgae = () => {
  const navigate = useNavigate();
  const { userInfo } = useAuth(); // get user Info Login
  const [isLoading, setIsLoading] = useState(true); // handle userInfo waiting get data

  // react hook form
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { active: show, handleActive: setShow } = useActive();

  const handleSignIn = (data) => {
    console.log(data);
  };

  // await userInfo get date
  useEffect(() => {
    if (userInfo) {
      setIsLoading(false);
    }
  }, [userInfo]);

  // check authen
  useEffect(() => {
    document.title = "Login Page";
    if (!isLoading) {
      if (userInfo?.email) {
        navigate("/");
      }
    }
  }, [errors, isLoading, navigate, userInfo?.email]);

  //handle error
  useEffect(() => {
    const arrError = Object.values(errors);
    console.log("arrError:", arrError);
    arrError.forEach((item) =>
      toast.error(item.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
    );
  }, [errors]);

  return (
    <AuthenticationPage>
      <form
        action="#"
        className="grid grid-cols-1 gap-4 place-content-center"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <div className="field-input">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            control={control}
            placeholder="Please enter your email address"
          ></Input>
        </div>
        <div className="field-input">
          <Label htmlFor="Password">Password</Label>
          <Input
            type={show ? "text" : "password"}
            name="Password"
            id="Password"
            control={control}
            placeholder="Please enter your password"
          >
            {show ? (
              <div className="p-2" onClick={() => setShow()}>
                <IconEyeClose />
              </div>
            ) : (
              <div className="p-2" onClick={() => setShow()}>
                <IconEyeOpen />
              </div>
            )}
          </Input>
        </div>
        <div className="my-1 font-medium">
          Chưa có tài khoản thì đăng kí đi thằng lol ?
          <NavLink to={"/sign-up"} className="text-red-500 italic">
            Register
          </NavLink>
        </div>
        <Button type="submit" disabled={isSubmitting} isloading={isSubmitting}>
          Login
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignInPgae;
