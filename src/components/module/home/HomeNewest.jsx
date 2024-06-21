import Heading from "components/layout/Heading";
import React from "react";
import PostCategory from "../posts/PostCategory";
import PostTitle from "../posts/PostTitle";

const HomeNewest = () => {
  const listSlideNews = [
    {
      linkImg:
        "https://s3-alpha-sig.figma.com/img/301b/dd86/c746f39b29d279d30158df2e5471dcc7?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JbHjnn9ruH70GRhQyTYEp8FWttwPQh34qBLI10SFNYTzGLABdvF6h6G-15DmvYkYW0pHcYM~Zh0pr2I1g6cJJPT8BRV-0sMUg8w5r1-ZBSozAXMBjBO73Llo1PncqTzpzGm~A7q7A7eE7n9GCrNwtGbqXO80JOBhOCNoAzsA5bNl4gsk~Msh3ZpUaPlx12~lAhInsLbATTWp847Qf8EiPS3SaJRrZN-kFwPPVGvWofkGprq54LIam2vsCjfK-yHau23QUSEVo5SHA3Tp8Y29Vh8bdT7IfV-npqiQE6ETYfvJ4erjaLVfUQmtYKUpAChL3Ek53wV0UnUPMRbkGJRATA__",
      title: "Hướng dẫn setup phòng cực chill dành cho người mới toàn tập",
      date: "Mar 23",
      auth: "Andiez Le",
    },
    {
      linkImg:
        "https://s3-alpha-sig.figma.com/img/f089/3a68/9fa2d6074fc1e5bf576b0a008e451c24?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jBnKbYTMsojal7yjZbnYAG61Tnxs-kXua1RnWkZMwfMXT1tqzc4p0t4W1GY8N8rGplJ7t7I06FzWkTQQlinNVnUtj9QFMp3z0mZhZ1EFWUR63gIoPbwLZr5Jhs7BxP~71k~qirYVU~64~T1HiWh-tlScAMTO-CMi5iQmzLAHRZIeYW-LGO~k48kdQlRHR9xig574ByUgzGp~W3e4WIZv9bXcjVJGuTSFCK7S1UFJvhNLgWzWcF18mvXE3VaArNX-4Fy9~v7cNqb30g787ZY7AepIlnuK0M8pcjyIiiGabt2IoHJJiJmFG2VqPk3Ct-kQGCjHBj3bg650mcrx3AbXfQ__",
      title: "Blockchain là gì? Giải thích chi tiết về Blockchain dễ hiểu",
      date: "July 27",
      auth: "Huy Tran",
    },
    {
      linkImg:
        "https://s3-alpha-sig.figma.com/img/f806/4436/27484fe22b84ab0566bef722b7f49536?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mPd-mQpAAS1NPrtTU124r0wNgxyCkLhUQ849tgdcCMv~NUWbsqBaVHwwG07Wrp3-DftEp4DG3Qm7v7pLR2oyHjTJQ2ZBETjHgVtJzRSWF2Snj7F7GBEoaeoBbAbhAij0~GW0FBe5DsEd-Dh4V4KU04mJKPSaAG5wXLQQrwosQmnO5CnRNB0NzbA1kufdvyuAoampySelbNVGudSh1uqPPQi3rIk2sKbFsU1cwIE~pchurWzoEoJduHKVj0Ar1ZzRRSFtcXPGykRv36L15ou3I22t5-Ny-BT~VG1r~mvquLCpuQ4neCfQwO1R~-bbOZeQwyLpCk5dzWBVTDeY9DWK9A__",
      title: "Hướng dẫn đăng ký tài khoản sàn Binance chi tiết (2022)",
      date: "May 3",
      auth: "Huy Tran",
    },
  ];

  return (
    <div className="NewestUpdate  mt-8">
      <Heading> Mới Nhất</Heading>
      <div className="news grid grid-cols-2">
        <div className="IMG-new pr-6">
          <img
            src="https://s3-alpha-sig.figma.com/img/e6a5/d086/f4dd62df84a598b10d0d0400bab268f7?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NtJf3vZ4Z~hzPydqM033pBEnEJVXLhU0pA6PDTD~rbiTg0m87OKi2mA8L6-X8J-Q1gexfzIMe04xptmaNOxWc5Vf7hDKyv0SNaAMJzDSPl-Z5CFnrflnuASGRh7omDimsJJecqSl8tq8FwTHrLzVy7JFzKH8H~QuHdbpvcLgdeSSv654GFyzMVQYl8EACoAzexXb1y5ohXEWdHDzMMez6NfqQLEi6e2DZI9qPex~cs7ShY6GDKsE9vX-r8o3PsUyd9Jr~ZFozUWShK~xiVJ6VSjx-FsPvaoaw7Fwxbv75yPu9o12QqtbVxcikMh5uU4qmVqI9cNVE9YWkZ8lUXt8cw__"
            alt=""
            className="w-full rounded-[15px]"
            srcSet=""
          />
          <div className="title-new  mt-3  flex flex-col justify-between gap-2">
            <PostCategory bgColor="bg-[#F3EDFF] text-[#6B6B6B]">
              Kiến thức
            </PostCategory>

            <PostTitle className="text-[22px]">
              {" "}
              Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
            </PostTitle>
            <div className="date flex justify-start items-center gap-3 text-[#6B6B6B]">
              <div className="">Mar 23</div>
              <div className="">
                <svg
                  width="6"
                  height="6"
                  viewBox="0 0 6 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="3" cy="3" r="3" fill="#B1B5C3" />
                </svg>
              </div>
              <div className="">Andiez Le</div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="slide-new  p-6 bg-[#F3EDFF] rounded-[15px] grid grid-cols-1 gap-[28px]">
          {listSlideNews.map((news, index) => (
            <div key={index} className="news-item flex flex-row gap-6">
              <div className="basis-1/3">
                <img
                  src={news.linkImg}
                  alt={news.title}
                  className="w-full rounded-lg"
                />
              </div>
              <div className="title flex flex-col justify-between gap-1 basis-1/2">
                <PostCategory bgColor="bg-white text-[#6B6B6B]">
                  Kiến thức
                </PostCategory>

                <PostTitle className="text-[18px]">{news.title}</PostTitle>

                <div className="date flex justify-start items-center gap-3 text-[#6B6B6B]">
                  <div className="">{news.date}</div>
                  <div className="">
                    <svg
                      width="6"
                      height="6"
                      viewBox="0 0 6 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="3" cy="3" r="3" fill="#B1B5C3" />
                    </svg>
                  </div>
                  <div className="">{news.auth}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeNewest;
