import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { state as modal } from "../../recoil/modal";
import LoginPage from "./Login/LoginPage";

export const LoginButton = () => {
  const [modalOpen, setModalOpen] = useRecoilState(modal);

  return (
    <div>
      {modalOpen && (
        <div className="fixed">
          <div
            onClick={() => setModalOpen(!modal)}
            className="fixed top-0 left-0 w-full h-full bg-[#000] opacity-40"
          />
          <LoginPage />
        </div>
      )}
      <button
        className="w-[50px] h-[50px] rounded-[99px] bg-[#E9E9EC]"
        onClick={() => setModalOpen(true)}
      />
    </div>
  );
};
