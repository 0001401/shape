import { Header } from "@/component/Header/Header";
import { MainLayout } from "../component/MainLayout/MainLayout";
import { Title } from "@/component/ContentSection/Title";

const Page = () => {
  return (
    <>
      <MainLayout>
        <Header />
        <div className="mb-[100px]" />
        <Title title={"action"} url={"/action"} />
      </MainLayout>
    </>
  );
};

export default Page;
