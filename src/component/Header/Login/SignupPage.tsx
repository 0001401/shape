import React from "react";
import Cancel from "../../../../public/icons/ic_cancel.svg";

const SignupPage = () => {
  return (
    <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[470px] h-[800px] bg-[#fff] rounded-[12px] p-[20px]">
      <div className="flex justify-between">
        <div className="w-[10px]" />
        <p className="text-[22px] font-[700] tracking-[-0.3px] leading-[130%] italic">
          sign-up
        </p>
        <Cancel width={30} height={30} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <label
            className="block mb-1 mt-[70px] tracking-[-0.15px] text-[13px] font-[400]"
            htmlFor="email"
          >
            email
          </label>
          <div className="flex">
            <input
              id="email"
              className="w-[250px] h-[45px] border-[1px] border-solid border-[#D9D9D9] rounded-[8px]"
            />
            <button className="bg-[#EAEDF1] rounded-[8px] px-[15px] ml-[15px]">
              인증번호 받기
            </button>
          </div>

          <label
            className="block mb-1 mt-[15px] tracking-[-0.15px] text-[13px] font-[500]"
            htmlFor="password"
          >
            certification number
          </label>
          <input
            id="password"
            className="w-[150px] h-[45px] border-[1px] border-solid border-[#D9D9D9] rounded-[8px]"
          />

          <label
            className="block mb-1 mt-[15px] tracking-[-0.15px] text-[13px] font-[500]"
            htmlFor="password"
          >
            nickname
          </label>
          <input
            id="password"
            className="w-[370px] h-[45px] border-[1px] border-solid border-[#D9D9D9] rounded-[8px]"
          />
          <label
            className="block mb-1 mt-[15px] tracking-[-0.15px] text-[13px] font-[500]"
            htmlFor="password"
          >
            phone number
          </label>
          <input
            id="password"
            className="w-[370px] h-[45px] border-[1px] border-solid border-[#D9D9D9] rounded-[8px]"
          />

          <label
            className="block mb-1 mt-[15px] tracking-[-0.15px] text-[13px] font-[500]"
            htmlFor="password"
          >
            pasword
          </label>
          <input
            id="password"
            className="w-[370px] h-[45px] border-[1px] border-solid border-[#D9D9D9] rounded-[8px]"
          />
          <label
            className="block mb-1 mt-[15px] tracking-[-0.15px] text-[13px] font-[500]"
            htmlFor="password"
          >
            pasword-check
          </label>
          <input
            id="password-check"
            className="w-[370px] h-[45px] border-[1px] border-solid border-[#D9D9D9] rounded-[8px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
