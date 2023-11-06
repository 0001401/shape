import React from "react";
import Cancel from "../../../../public/icons/ic_cancel.svg";

const SignupPage = () => {
  return (
    <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[470px] h-[800px] bg-[#fff] rounded-[12px] p-[20px] overflow-y-auto">
      <div className="flex justify-between">
        <div className="w-[25px]" />
        <p className=" text-[22px] font-[700] tracking-[-0.3px] leading-[130%] italic">
          sign-up
        </p>
        <Cancel width={30} height={30} className="cursor-pointer" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-[15px] w-[100px] h-[100px] bg-[#ddd] rounded-[99px]"></div>
        <div className="relative">
          <label
            className="block mb-1 mt-[30px] tracking-[-0.15px] text-[13px] font-[400]"
            htmlFor="email"
          >
            email *
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
            certification number *
          </label>
          <div className="flex">
            <input
              id="password"
              className="w-[250px] h-[45px] border-[1px] border-solid border-[#D9D9D9] rounded-[8px]"
            />
            <button className="bg-[#EAEDF1] rounded-[8px] px-[30px] ml-[15px]">
              인증하기
            </button>
          </div>
          <label
            className="block mb-1 mt-[15px] tracking-[-0.15px] text-[13px] font-[500]"
            htmlFor="password"
          >
            nickname *
          </label>
          <input
            id="password"
            className="w-[370px] h-[45px] border-[1px] border-solid border-[#D9D9D9] rounded-[8px]"
          />
          <label
            className="block mb-1 mt-[15px] tracking-[-0.15px] text-[13px] font-[500]"
            htmlFor="password"
          >
            phone number *
          </label>
          <input
            id="password"
            className="w-[370px] h-[45px] border-[1px] border-solid border-[#D9D9D9] rounded-[8px]"
          />
          <label
            className="block mb-1 mt-[15px] tracking-[-0.15px] text-[13px] font-[500]"
            htmlFor="password"
          >
            pasword *
          </label>
          <input
            id="password"
            className="w-[370px] h-[45px] border-[1px] border-solid border-[#D9D9D9] rounded-[8px]"
          />
          <label
            className="block mb-1 mt-[15px] tracking-[-0.15px] text-[13px] font-[500]"
            htmlFor="password"
          >
            pasword-check *
          </label>
          <input
            id="password-check"
            className="w-[370px] h-[45px] border-[1px] border-solid border-[#D9D9D9] rounded-[8px]"
          />
          <form>
            <label
              className="block mb-1 mt-[15px] tracking-[-0.15px] text-[13px] font-[500]"
              htmlFor="password"
            >
              area
            </label>
            <select name="area" id="area">
              <option value="서울">서울</option>
              <option value="부산">부산</option>
              <option value="경기">경기</option>
              <option value="충청도">충청도</option>
              <option value="경상도">경상도</option>
              <option value="강원도">강원도</option>
            </select>
            <input id="area" className="w-[370px]" />
          </form>
          <label
            className="block mb-1 mt-[15px] tracking-[-0.15px] text-[13px] font-[500]"
            htmlFor="password"
          >
            height
          </label>
          <input
            id="password-check"
            className="w-[370px] h-[45px] border-[1px] border-solid border-[#D9D9D9] rounded-[8px]"
          />
          <label
            className="block mb-1 mt-[15px] tracking-[-0.15px] text-[13px] font-[500]"
            htmlFor="password"
          >
            weight
          </label>
          <input
            id="password-check"
            className="w-[370px] h-[45px] border-[1px] border-solid border-[#D9D9D9] rounded-[8px]"
          />
          <button className="w-[370px] h-[45px] rounded-[8px] border-[1px] border-solid border-[#EAEDF1] mt-[15px]">
            가입하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
