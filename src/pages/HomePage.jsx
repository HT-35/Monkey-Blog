import { Button } from "components/button";
import { IconSearch } from "components/icon";
import React from "react";

const HomePage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto w-full  lg:pt-6 lg:px-8 max-lg:px-4 max-lg:pt-5 max-sm:py-2 bg-white h-[5000px]">
      <header className="nav flex justify-between lg:text-2xl max-sm:text-base py-2 mb-10">
        <div className="nav flex justify-center items-center gap-8 max-sm:gap-3">
          <img src="./img/monkey.png" alt="" srcset="" className="w-10" />
          <span>Home</span>
          <span>Blog</span>
          <span>Contact</span>
        </div>
        <div className="search flex justify-between gap-6">
          <div className="relative ">
            <input
              type="text"
              name=""
              id=""
              className="px-2 py-2 border-[1px] border-[#CFCFCF] rounded-lg pr-14"
              placeholder="Search posts..."
            />
            <div className="absolute top-[50%] -translate-y-[50%] right-0 px-4 ">
              <IconSearch></IconSearch>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#00B4AA] px-2 py-2 rounded-lg w-[191px]"
          >
            Sign Up
          </button>
        </div>
      </header>
      <aside className="w-full h-[600px] bg-gradient-to-br from-[#00B4AA] to-[#A4D96C] flex flex-row  pt-10 px-10">
        <div className="basis-1/3 content text-white flex flex-col gap-8 ">
          <h1 className="text-[48px] font-bold">Monkey Blogging</h1>
          <p className="text-sm ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </p>
          <button
            type="button"
            className="bg-white py-4 px-11 text-[#23BB86] text-lg w-[300px] h-[80px]  rounded-lg"
          >
            Get Started
          </button>
        </div>
        <div className="img basis-2/3 flex justify-center">
          <img src="./img/money.png" alt="" srcset="" className="w-full" />
        </div>
      </aside>
      <main className="mt-8">
        <div className="Feature">
          <h1 className="text-xl font-semibold text-title mb-8">Feature</h1>
          <div className="list-feature flex  gap-10 justify-between">
            <div
              className="h-[300px] w-[400px] bg-center object-cover bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://s3-alpha-sig.figma.com/img/f862/2bb2/58aa272e7f59d5910f2a8b8a4da46c32?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mWOh7EWX2EVtJLmuUI8SPTkMEf9jYeaMn73UwSJ0FgV~uI18kVXC4tQGAcQXpWri2KWj-Sia9Amtk23yvFcz3RUSYwDZK4qt~tKq3FpHOkvymB81HySZFpFgpJtoH5Sl4xx~wUFMi0suQ819SVQ91O22IZ0TKIjbeYgx0DqHG~n8WU6O6KSgTnY2un1PjXPYyC2FOiOrZPPzaZx5TnhoNJnQwpuTGMTajzdVX4wbuExBu9WBdbzVxlc41c5YuYLuZRXO-zfYnuIEdwgPjKYdqpSPctWMyi4RCkvVf39XErhER9tbEfRYumOEAEjWTCWZN~62iZzqJKro4vSUdOe~1A__ ')",
                boxShadow: "0px 12px 25px -12px #A783F126",
              }}
            ></div>
            <div
              className="h-[300px] w-[400px]  bg-center object-cover bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://s3-alpha-sig.figma.com/img/f862/2bb2/58aa272e7f59d5910f2a8b8a4da46c32?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mWOh7EWX2EVtJLmuUI8SPTkMEf9jYeaMn73UwSJ0FgV~uI18kVXC4tQGAcQXpWri2KWj-Sia9Amtk23yvFcz3RUSYwDZK4qt~tKq3FpHOkvymB81HySZFpFgpJtoH5Sl4xx~wUFMi0suQ819SVQ91O22IZ0TKIjbeYgx0DqHG~n8WU6O6KSgTnY2un1PjXPYyC2FOiOrZPPzaZx5TnhoNJnQwpuTGMTajzdVX4wbuExBu9WBdbzVxlc41c5YuYLuZRXO-zfYnuIEdwgPjKYdqpSPctWMyi4RCkvVf39XErhER9tbEfRYumOEAEjWTCWZN~62iZzqJKro4vSUdOe~1A__ ')",
              }}
            ></div>
            <div
              className="h-[300px] w-[400px] bg-center object-cover bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://s3-alpha-sig.figma.com/img/f862/2bb2/58aa272e7f59d5910f2a8b8a4da46c32?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mWOh7EWX2EVtJLmuUI8SPTkMEf9jYeaMn73UwSJ0FgV~uI18kVXC4tQGAcQXpWri2KWj-Sia9Amtk23yvFcz3RUSYwDZK4qt~tKq3FpHOkvymB81HySZFpFgpJtoH5Sl4xx~wUFMi0suQ819SVQ91O22IZ0TKIjbeYgx0DqHG~n8WU6O6KSgTnY2un1PjXPYyC2FOiOrZPPzaZx5TnhoNJnQwpuTGMTajzdVX4wbuExBu9WBdbzVxlc41c5YuYLuZRXO-zfYnuIEdwgPjKYdqpSPctWMyi4RCkvVf39XErhER9tbEfRYumOEAEjWTCWZN~62iZzqJKro4vSUdOe~1A__ ')",
              }}
            ></div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default HomePage;
