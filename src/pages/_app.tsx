import { AppProps } from "next/app";
import React from "react";
import { RecoilRoot } from "recoil";

export const _app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};
