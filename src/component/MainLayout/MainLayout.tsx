import React, { ReactNode } from "react";

interface MainLayoutProps {
  children?: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <section className="bg-[#EAEDF1] w-full h-[1060px] flex justify-center items-center md:py-[40px] lg:py-[40px]">
      <div className="sm:w-[390px] md:w-[500px] lg:w-[1200px]  h-full rounded-[50px] p-[70px] bg-[#fff]">
        {children}
      </div>
    </section>
  );
};
