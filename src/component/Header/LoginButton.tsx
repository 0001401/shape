import React, { useState } from "react";
import Cancel from "../../../public/icons/ic_cancel.svg";
import axios from "axios";

export const LoginButton = () => {
  const [modal, setModal] = useState(false);

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
      {modal && (
        <div className="fixed">
          <div
            onClick={() => setModal(!modal)}
            className="fixed top-0 left-0 w-full h-full bg-[#000] opacity-40"
          />
          <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[470px] h-[600px] bg-[#fff] rounded-[12px] p-[20px]">
            <div className="flex justify-between">
              <div />
              <p className="text-[22px] font-[700] tracking-[-0.3px] leading-[130%]">
                shape
              </p>
              <Cancel width={30} height={30} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="relative ">
                <label className="block mb-1 mt-[70px]" htmlFor="email">
                  email
                </label>
                <input
                  id="email"
                  className="w-[350px] h-[45px] border-[1px] border-solid border-[#D9D9D9] rounded-[8px]"
                />
                <label className="block mb-1 mt-[15px]" htmlFor="password">
                  pasword
                </label>
                <input
                  id="password"
                  className="w-[350px] h-[45px] border-[1px] border-solid border-[#D9D9D9] rounded-[8px]"
                />
              </div>
              <button
                onClick={postHandler}
                className="w-[350px] h-[45px] rounded-[8px] bg-[#EAEDF1] mt-[30px]"
              >
                로그인
              </button>
              <button
                onClick={postHandler}
                className="w-[350px] h-[45px] rounded-[8px] border-[1px] border-solid border-[#EAEDF1] mt-[15px]"
              >
                가입하기
              </button>
            </div>
          </div>
        </div>
      )}
      <button
        className="w-[50px] h-[50px] rounded-[99px] bg-[#E9E9EC]"
        onClick={() => setModal(!modal)}
      />
    </div>
  );
};
