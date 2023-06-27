import React from "react";

const Button = ({ children }) => {
  return (
    <button className=" btn bg-green-300 hover:bg-green-400 text-green-950 text-base rounded-sm shadow-md">
      {children}
    </button>
  );
};

export default Button;
