import React, { ReactNode, useState } from "react";

interface IProps {
  content: ReactNode;
}

export const useModal: React.FC<IProps> = ({ content }) => {
  const [modal, setModal] = useState(false);

  return <div className="">{modal && <div>{content}</div>}</div>;
};
