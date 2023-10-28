import { MainLayout } from "../component/MainLayout/MainLayout";

const Page = () => {
  return (
    <>
      <MainLayout>
        <div className="flex justify-between items-center">
          <p className="text-[40px] font-[700] italic leading-[170%] tracking-[-2px]">
            shape
          </p>
          <div className="flex">
            <div className="w-[50px] h-[50px] rounded-[99px] bg-[#E9E9EC] "></div>
            <div className="w-[150px] h-[50px] rounded-[99px] bg-[#E9E9EC] ml-[20px]"></div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Page;
