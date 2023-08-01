import React from "react";
import { useParams } from "react-router-dom";
import Doctors from "../Doctors/Doctors";
import DoctorsHeader from "../DoctorsHeader/DoctorsHeader";
import servicesData from "../../../data/services.json";
import { useEffect } from "react";
import { useState } from "react";

const DoctorsHome = () => {
  const [services, setServices] = useState([]);

  const { serviceTitle } = useParams();
  console.log(servicesData);

  useEffect(() => {
    const filteredService = servicesData.filter(
      (serviceData) => serviceData.title === serviceTitle
    );
    setServices(filteredService);
  }, []);

  return (
    <div className="">
      {services.map((service) => (
        <DoctorsHeader key={service.id} service={service}>
          {serviceTitle}{" "}
        </DoctorsHeader>
      ))}
      {/* <DoctorsHeader>{serviceTitle} </DoctorsHeader> */}
      <Doctors />
    </div>
  );
};

export default DoctorsHome;
