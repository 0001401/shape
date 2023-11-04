import React from "react";
import Cancel from "../../../../public/icons/ic_cancel.svg";
import axios from "axios";
import Kakao from "../../../../public/icons/ic_kakao.svg";
import Google from "../../../../public/icons/ic_google.svg";

const LoginPage = () => {
  const endpoint = "192.168.56.1:8080/members/checkDuplicate";
  const data = {
    accountId: "lllcy1225",
  };

  const postHandler = () => {
    axios
      .post(endpoint, data)
      .then((res) => console.log("성공", res.data))
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[470px] h-[600px] bg-[#fff] rounded-[12px] p-[20px]">
        <div className="flex justify-between">
          <div className="w-[20px]" />
          <p className="text-[22px] font-[700] tracking-[-0.3px] leading-[130%] italic">
            shape
          </p>
          <Cancel width={30} height={30} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="relative ">
            <label
              className="block mb-1 mt-[70px] tracking-[-0.15px] text-[13px] font-[500]"
              htmlFor="email"
            >
              email
            </label>
            <input
              id="email"
              className="w-[350px] h-[45px] border-[1px] border-solid border-[#D9D9D9] rounded-[8px]"
            />
            <label
              className="block mb-1 mt-[15px] tracking-[-0.15px] text-[13px] font-[500]"
              htmlFor="password"
            >
              pasword
            </label>
            <input
              id="password"
              className="w-[350px] h-[45px] border-[1px] border-solid border-[#D9D9D9] rounded-[8px]"
            />
          </div>
          <button
            onClick={postHandler}
            className="w-[350px] h-[45px] rounded-[8px] bg-[#EAEDF1] mt-[30px] font-[400]"
          >
            로그인
          </button>
          <button
            onClick={postHandler}
            className="w-[350px] h-[45px] rounded-[8px] border-[1px] border-solid border-[#EAEDF1] mt-[15px]"
          >
            가입하기
          </button>
          <div className="flex gap-[10px] mt-[30px]">
            <Kakao />
            <Google />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
