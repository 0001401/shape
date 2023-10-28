import { AppProps } from "next/app";
import React from "react";
import { RecoilRoot } from "recoil";
import "@/style/global.css";

const _app = ({ Component, pageProps: { session, pageProps } }: AppProps) => {
  return (
    <>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

export default _app;
