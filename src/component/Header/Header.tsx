import React from "react";

export const Header = () => {
  return (
    <div className="flex justify-between">
      <p className="text-[40px] font-[700] italic leading-[170%] tracking-[-2px]">
        shape
      </p>
      <div className="flex justify-center items-center">
        <div className="w-[50px] h-[50px] rounded-[99px] bg-[#E9E9EC] " />
        <div className="sm:w-[100px] md:w-[150px] lg:w-[150px] h-[50px] rounded-[99px] bg-[#E9E9EC] ml-[20px] flex items-center">
          <p className="text-center mx-auto">서울 | 23도</p>
        </div>
      </div>
    </div>
  );
};
