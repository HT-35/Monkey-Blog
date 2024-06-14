import Button from "components/button/Button";
import { IconEyeClose, IconEyeOpen } from "components/icon";
import Input from "components/input";
import Label from "components/label";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// validate form
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Bounce, toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "firebase-app/firebase-config";
import { update, values } from "lodash";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";

//Schema validate form

const schema = yup.object({
  fullName: yup.string().required("m nhap đầy đủ họ và tên  !"),
  EmailAddress: yup.string().required("nhập email đi"),
  Password: yup.string().required("mật khẩu nữa"),
});

const SingUpPage = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    //reset,
    //watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);

  async function handleSignUp(data) {
    try {
      console.log(data);

      // Kiểm tra tính hợp lệ của dữ liệu
      if (!isValid) return;

      // Tạo một người dùng mới với email và mật khẩu được cung cấp
      const user = await createUserWithEmailAndPassword(
        auth,
        data.EmailAddress,
        data.Password
      );

      // Cập nhật hồ sơ của người dùng hiện tại
      await updateProfile(auth.currentUser, {
        displayName: data.fullName,
      });

      // tạo collection trong firebase database
      const colRef = collection(db, "users");
      addDoc(colRef, {
        name: data.fullName,
        email: data.EmailAddress,
        password: data.Password,
      });

      // Hiển thị thông báo đăng ký thành công
      toast.success("Đăng ký thành công!!!");
      // Điều hướng đến trang chủ hoặc trang khác
      navigate("/");
    } catch (error) {
      console.log(error);
      // Xử lý các lỗi cụ thể
      if (error.code === "auth/email-already-in-use") {
        toast.error("Địa chỉ email đã được sử dụng.");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Địa chỉ email không hợp lệ.");
      } else if (error.code === "auth/operation-not-allowed") {
        toast.error("Tài khoản email/mật khẩu chưa được kích hoạt.");
      } else if (error.code === "auth/weak-password") {
        toast.error("Mật khẩu quá yếu.");
      } else {
        toast.error(`Lỗi: ${error.message}`);
      }
    }
  }

  useEffect(() => {
    const arrErrors = Object.values(errors);
    //console.log("arrErrors:", arrErrors);
    if (arrErrors.length > 0) {
      arrErrors.forEach((item) =>
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
      //toast("Loi roi d m m");
    }
  }, [errors]);

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
