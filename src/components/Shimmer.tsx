import React from "react";

const Shimmer = () => {
  const loading = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="bg-skin-bg lg:mx-44 md:mx-40 justify-items-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {loading.map((item) => (
        <div
          key={item}
          className="w-[217.562px]  h-[285px] gap-4 flex-shrink-0 rounded-[8px] justify-center bg-white flex flex-col"
        >
          <div className="h-24 w-24 rounded-full p-4 flex self-center justify-center  bg-slate-200" />
          <div className="block ">
            <div className="flex justify-between  pl-[10px]  py-2">
              <div className="flex w-[200px] justify-between h-[38px] flex-shrink-0  text-[16px] font-[400px] leading-[19px]">
                <div className="  w-[74px] h-[14px] flex-shrink-0 bg-gray-200 " />

                <div className="flex flex-wrap content-center justify-center rounded-[5px] w-[64px] h-[26px] flex-shrink-0 bg-gray-200" />
              </div>
            </div>
            <div className="w-[192px] h-[25px] pl-[10px] flex-shrink-0">
              <p className="bg-slate-500 "></p>
            </div>
          </div>
          <div className="w-[218px] h-[31.907px] flex-shrink-0 bg-gray-200  rounded-br-[8px] rounded-bl-[8px]"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
