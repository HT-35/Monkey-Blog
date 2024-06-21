import React from "react";

import Layout from "components/layout/Layout";
import HomeBanner from "components/module/home/HomeBanner";
import HomeFeature from "components/module/home/HomeFeature";
import HomeNewest from "components/module/home/HomeNewest";

const HomePage = () => {
  const listSlide = [
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
    {
      linkImg:
        "https://s3-alpha-sig.figma.com/img/f806/4436/27484fe22b84ab0566bef722b7f49536?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mPd-mQpAAS1NPrtTU124r0wNgxyCkLhUQ849tgdcCMv~NUWbsqBaVHwwG07Wrp3-DftEp4DG3Qm7v7pLR2oyHjTJQ2ZBETjHgVtJzRSWF2Snj7F7GBEoaeoBbAbhAij0~GW0FBe5DsEd-Dh4V4KU04mJKPSaAG5wXLQQrwosQmnO5CnRNB0NzbA1kufdvyuAoampySelbNVGudSh1uqPPQi3rIk2sKbFsU1cwIE~pchurWzoEoJduHKVj0Ar1ZzRRSFtcXPGykRv36L15ou3I22t5-Ny-BT~VG1r~mvquLCpuQ4neCfQwO1R~-bbOZeQwyLpCk5dzWBVTDeY9DWK9A__",
      title: "Deploy website Next.Js hoặc Node.Js lên VPS",
      date: "May 3",
      auth: "Huy Tran",
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto w-full  lg:pt-6 lg:px-8 max-lg:px-4 max-lg:pt-5 max-sm:py-2 bg-white h-[5000px]">
      <Layout>
        <HomeBanner></HomeBanner>
        <main className="grid grid-cols-1 gap-5">
          <HomeFeature></HomeFeature>
          <HomeNewest></HomeNewest>
          <div className="slide grid grid-cols-4 gap-6 mt-8">
            {listSlide.map((item, index) => {
              const { title, linkImg, date, auth } = item;
              return (
                <div key={index} className="item grid grid-cols-1  gap-5 ">
                  <img
                    src={linkImg}
                    alt=""
                    className="w-full max-h-[224px] rounded-lg"
                  />
                  <div className="title flex flex-col justify-between gap-2">
                    <span className="bg-[#F3EDFF] text-[#6B6B6B] px-3 py-1 rounded-[10px] text-sm font-semibold max-w-[120px] text-center">
                      kiến thức
                    </span>
                    <p className="font-semibold ">{title}</p>
                    <div className="date flex justify-start items-center gap-3 text-[#6B6B6B]">
                      <div className="">{date}</div>
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
                      <div className="">{auth}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default HomePage;
