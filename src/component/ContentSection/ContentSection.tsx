import React from "react";
import { Title } from "./Title";
import Card from "./Card";

const ContentSection = () => {
  return (
    <>
      <div className="w-full flex">
        <div className="flex w-full">
          <div className="w-1/2">
            <Title title={"action"} url={"/action"} />
            <Card width={150} height={150} />
          </div>
          <div>
            <Title title={"history"} url={"/history"} />
            <Card width={270} height={150} />
          </div>
        </div>
      </div>
      <Title title={"community"} url={"/community"} />
      <Card width={270} height={300} />
    </>
  );
};

export default ContentSection;
