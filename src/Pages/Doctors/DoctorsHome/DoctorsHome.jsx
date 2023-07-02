import React from "react";
import { useParams } from "react-router-dom";
import Doctors from "../Doctors/Doctors";
import DoctorsHeader from "../DoctorsHeader/DoctorsHeader";

const DoctorsHome = () => {
  const { serviceTitle } = useParams();

  return (
    <div className="">
      <DoctorsHeader>{serviceTitle} </DoctorsHeader>
      <Doctors />
    </div>
  );
};

export default DoctorsHome;
