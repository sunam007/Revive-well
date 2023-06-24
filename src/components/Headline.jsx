import React from "react";

const Headline = ({
  children,
  size = "text-4xl",
  fontWeight = "font-semibold",
  textColor = "text-black",
}) => {
  return <h1 className={` ${size} ${fontWeight} ${textColor} `}>{children}</h1>;
};

export default Headline;
