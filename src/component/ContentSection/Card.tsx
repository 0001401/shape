import React from "react";

const Card = ({ width, height }: { width: number; height: number }) => {
  const cardStyle = {
    height: `${height}px`,
    marginTop: "10px",
    marginBottom: "50px",
    padding: "20px",
    width: `${width}px`,
    borderRadius: "12px",
    border: "1px solid #E3E3EC",
    backgroundColor: "#fff",
  };
  return (
    <>
      <div style={cardStyle} className="cursor-pointer">
        카드 내용
      </div>
    </>
  );
};

export default Card;
