import Heading from "components/layout/Heading";
import React from "react";
import PostCategory from "../posts/PostCategory";
import PostTitle from "../posts/PostTitle";
import { NavLink } from "react-router-dom";

const HomeFeature = () => {
  const listNews = [
    {
      title: "Hướng dẫn setup phòng cực chill dành cho người mới toàn tập",
      date: "Mar 23",
      auth: "Andiez Le",
      slug: "/abc",
    },
    {
      title: "Bitcoin là gì? Giải thích chi tiết về Blockchain dễ hiểu",
      date: "July 27",
      auth: "Huy Tran",
      slug: "/xyz",
    },
    {
      title: "Hướng dẫn đăng ký tài khoản sàn Binance chi tiết (2022)",
      date: "May 3",
      auth: "Huy Tran",
      slug: "/ghy",
    },
  ];

  return (
    <div className="Feature mt-8">
      {/*<h1 className="text-xl font-semibold text-title mb-8 select-none"></h1>*/}
      <Heading> Bài viết nổi bật</Heading>
      <div className="list-feature flex  gap-10 justify-between">
        {listNews.map((item, index) => {
          return (
            <NavLink to={item.slug}>
              <div
                key={index}
                className=" h-[300px] w-[400px] bg-top object-cover  bg-no-repeat  rounded-2xl"
                style={{
                  backgroundImage:
                    "url('https://s3-alpha-sig.figma.com/img/f862/2bb2/58aa272e7f59d5910f2a8b8a4da46c32?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mWOh7EWX2EVtJLmuUI8SPTkMEf9jYeaMn73UwSJ0FgV~uI18kVXC4tQGAcQXpWri2KWj-Sia9Amtk23yvFcz3RUSYwDZK4qt~tKq3FpHOkvymB81HySZFpFgpJtoH5Sl4xx~wUFMi0suQ819SVQ91O22IZ0TKIjbeYgx0DqHG~n8WU6O6KSgTnY2un1PjXPYyC2FOiOrZPPzaZx5TnhoNJnQwpuTGMTajzdVX4wbuExBu9WBdbzVxlc41c5YuYLuZRXO-zfYnuIEdwgPjKYdqpSPctWMyi4RCkvVf39XErhER9tbEfRYumOEAEjWTCWZN~62iZzqJKro4vSUdOe~1A__ ')",
                  backgroundSize:
                    "250%" /* Điều chỉnh giá trị này để phóng to ảnh */,
                  backgroundPosition:
                    "left top" /* Điều chỉnh vị trí lấy phần top của ảnh */,
                }}
              >
                <div className=" text-white px-4 py-5 grid grid-cols-1 gap-2">
                  <div className="sub-title flex justify-between">
                    {/*<div className=" px-3 py-1 rounded-xl text-sm font-semibold"></div>*/}
                    <PostCategory bgColor="bg-white text-[#6B6B6B]">
                      {" "}
                      Kiến thức
                    </PostCategory>
                    <div className="date flex justify-between items-center gap-3">
                      <div className="">Mar 23</div>
                      <div className="">
                        <svg
                          width="6"
                          height="6"
                          viewBox="0 0 6 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="3" cy="3" r="3" fill="#F8F9FA" />
                        </svg>
                      </div>
                      <div className="">Andiez Le</div>
                    </div>
                  </div>

                  <div className="">
                    <PostTitle>{item.title}</PostTitle>
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default HomeFeature;
