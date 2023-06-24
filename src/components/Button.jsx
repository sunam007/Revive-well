import { Children } from "react";

const Button = ({ children }) => {
  return (
    <button className=" btn bg-green-400 hover:bg-green-300 text-green-950 text-base rounded-sm shadow-lg">
      {children}
    </button>
  );
};

export default Button;
