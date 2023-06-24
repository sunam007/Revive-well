import React from "react";

const Subtitle = ({
  children,
  fontSize = "text-lg",
  fontWeight = "font-semibold",
  textColor = "text-black",
}) => {
  return (
    <h1 className={` ${fontSize} ${fontWeight} ${textColor} `}>{children}</h1>
  );
};

export default Subtitle;
