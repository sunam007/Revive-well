import React from "react";
import Title from "../../../components/Title";

function DoctorsHeader({ children }) {
  return (
    <section>
      <div className="text-center mt-8">
        <Title>{children}</Title>
        <div className="divider"></div>
      </div>
    </section>
  );
}

export default DoctorsHeader;
