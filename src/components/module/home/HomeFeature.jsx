import Heading from "components/layout/Heading";
import React from "react";

const HomeFeature = () => {
  return (
    <div className="Feature mt-8">
      {/*<h1 className="text-xl font-semibold text-title mb-8 select-none"></h1>*/}
      <Heading> Bài viết nổi bật</Heading>
      <div className="list-feature flex  gap-10 justify-between">
        <div
          className=" h-[300px] w-[400px] bg-top object-cover  bg-no-repeat  rounded-2xl"
          style={{
            backgroundImage:
              "url('https://s3-alpha-sig.figma.com/img/f862/2bb2/58aa272e7f59d5910f2a8b8a4da46c32?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mWOh7EWX2EVtJLmuUI8SPTkMEf9jYeaMn73UwSJ0FgV~uI18kVXC4tQGAcQXpWri2KWj-Sia9Amtk23yvFcz3RUSYwDZK4qt~tKq3FpHOkvymB81HySZFpFgpJtoH5Sl4xx~wUFMi0suQ819SVQ91O22IZ0TKIjbeYgx0DqHG~n8WU6O6KSgTnY2un1PjXPYyC2FOiOrZPPzaZx5TnhoNJnQwpuTGMTajzdVX4wbuExBu9WBdbzVxlc41c5YuYLuZRXO-zfYnuIEdwgPjKYdqpSPctWMyi4RCkvVf39XErhER9tbEfRYumOEAEjWTCWZN~62iZzqJKro4vSUdOe~1A__ ')",
            backgroundSize: "250%" /* Điều chỉnh giá trị này để phóng to ảnh */,
            backgroundPosition:
              "left top" /* Điều chỉnh vị trí lấy phần top của ảnh */,
          }}
        >
          <div className=" text-white px-4 py-5 grid grid-cols-1 gap-2">
            <div className="sub-title flex justify-between">
              <div className="bg-white text-[#6B6B6B] px-3 py-1 rounded-xl text-sm font-semibold">
                Kiến thức
              </div>
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
            <div className="title"></div>
            <div className="">
              <p className="text-xl font-semibold">
                Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
              </p>
            </div>
          </div>
        </div>
        <div
          className=" relative h-[300px] w-[400px] bg-top object-cover  bg-no-repeat  rounded-2xl"
          style={{
            backgroundImage:
              "url('https://s3-alpha-sig.figma.com/img/f862/2bb2/58aa272e7f59d5910f2a8b8a4da46c32?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mWOh7EWX2EVtJLmuUI8SPTkMEf9jYeaMn73UwSJ0FgV~uI18kVXC4tQGAcQXpWri2KWj-Sia9Amtk23yvFcz3RUSYwDZK4qt~tKq3FpHOkvymB81HySZFpFgpJtoH5Sl4xx~wUFMi0suQ819SVQ91O22IZ0TKIjbeYgx0DqHG~n8WU6O6KSgTnY2un1PjXPYyC2FOiOrZPPzaZx5TnhoNJnQwpuTGMTajzdVX4wbuExBu9WBdbzVxlc41c5YuYLuZRXO-zfYnuIEdwgPjKYdqpSPctWMyi4RCkvVf39XErhER9tbEfRYumOEAEjWTCWZN~62iZzqJKro4vSUdOe~1A__ ')",
            backgroundSize: "250%" /* Điều chỉnh giá trị này để phóng to ảnh */,
            backgroundPosition:
              "left top" /* Điều chỉnh vị trí lấy phần top của ảnh */,
          }}
        >
          <div className=" text-white px-4 py-5 grid grid-cols-1 gap-2">
            <div className="sub-title flex justify-between">
              <div className="bg-white text-[#6B6B6B] px-3 py-1 rounded-xl text-sm font-semibold">
                Kiến thức
              </div>
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
            <div className="title"></div>
            <div className="">
              <p className="text-xl font-semibold">
                Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
              </p>
            </div>
          </div>
        </div>

        <div
          className=" h-[300px] w-[400px] bg-top object-cover  bg-no-repeat  rounded-2xl"
          style={{
            backgroundImage:
              "url('https://s3-alpha-sig.figma.com/img/f862/2bb2/58aa272e7f59d5910f2a8b8a4da46c32?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mWOh7EWX2EVtJLmuUI8SPTkMEf9jYeaMn73UwSJ0FgV~uI18kVXC4tQGAcQXpWri2KWj-Sia9Amtk23yvFcz3RUSYwDZK4qt~tKq3FpHOkvymB81HySZFpFgpJtoH5Sl4xx~wUFMi0suQ819SVQ91O22IZ0TKIjbeYgx0DqHG~n8WU6O6KSgTnY2un1PjXPYyC2FOiOrZPPzaZx5TnhoNJnQwpuTGMTajzdVX4wbuExBu9WBdbzVxlc41c5YuYLuZRXO-zfYnuIEdwgPjKYdqpSPctWMyi4RCkvVf39XErhER9tbEfRYumOEAEjWTCWZN~62iZzqJKro4vSUdOe~1A__ ')",
            backgroundSize: "250%" /* Điều chỉnh giá trị này để phóng to ảnh */,
            backgroundPosition:
              "left top" /* Điều chỉnh vị trí lấy phần top của ảnh */,
          }}
        >
          <div className=" text-white px-4 py-5 grid grid-cols-1 gap-2">
            <>
              <div className="sub-title flex justify-between">
                <div className="bg-white text-[#6B6B6B] px-3 py-1 rounded-xl text-sm font-semibold">
                  Kiến thức
                </div>
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
              <div className="title"></div>
              <div className="">
                <p className="text-xl font-semibold">
                  Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
                </p>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeature;