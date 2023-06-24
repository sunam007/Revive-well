import React from "react";

const Title = ({
  children,
  fontSizeLarge = "text-4xl",
  fontSizeSmall = "text-2xl",
  fontWeight = "font-semibold",
  textColor = "text-black",
}) => {
  return (
    <h1 className={`text-2xl md:text-4xl ${fontWeight} ${textColor} `}>
      {children}
    </h1>
  );
};

export default Title;
