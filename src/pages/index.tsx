import { Header } from "@/component/Header/Header";
import { MainLayout } from "../component/MainLayout/MainLayout";
import ContentSection from "@/component/ContentSection/ContentSection";

const Page = () => {
  return (
    <>
      <MainLayout>
        <Header />
        <div className="mb-[100px]" />
        <ContentSection />
      </MainLayout>
    </>
  );
};

export default Page;
