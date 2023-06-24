import React from "react";

const Paragraph = ({
  children,
  fontSize = "text-lg",
  fontWeight = "font-medium",
  textColor = "text-black",
  lineHeight = "leading-relaxed",
}) => {
  return (
    <p className={`${fontSize} ${fontWeight} ${textColor} ${lineHeight}`}>
      {children}
    </p>
  );
};

export default Paragraph;
