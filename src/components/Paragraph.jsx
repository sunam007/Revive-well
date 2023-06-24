import React from "react";

const Paragraph = ({
  children,
  size = "text-base",
  fontWeight = "font-medium",
  textColor = "text-black",
  lineHeight = "leading-normal",
}) => {
  return (
    <p className={`${size} ${fontWeight} ${textColor} ${lineHeight}`}>
      {children}
    </p>
  );
};

export default Paragraph;
