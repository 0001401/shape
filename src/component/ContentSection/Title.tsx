import { useRouter } from "next/navigation";
import React from "react";

export const Title = ({ title, url }: { title: string; url: string }) => {
  const router = useRouter();
  return (
    <button
      className="flex text-[16px] font-[700] tracking-[-1px] italic"
      onClick={() => router.push(url)}
    >
      <p className="leading-[175%]">{title}</p>
      <p className="ml-[5px] text-[13px] leading-[230%]">‣</p>
    </button>
  );
};
