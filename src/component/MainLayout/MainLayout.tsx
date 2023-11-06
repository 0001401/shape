import React, { ReactNode } from "react";

interface MainLayoutProps {
  children?: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <section className="bg-[#EAEDF1] w-full h-screen flex justify-center items-center sm:p-[20px] md:p-[40px] lg:p-[40px] ">
      <div className="sm:w-[500px] sm:p-[20px] md:w-[820px] lg:w-[1200px]  h-full rounded-[50px]  p-[70px] bg-[#fff] overflow-y-auto">
        {children}
      </div>
    </section>
  );
};
