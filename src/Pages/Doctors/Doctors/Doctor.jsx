import React from "react";
import { Link } from "react-router-dom";
import Paragraph from "../../../components/Paragraph";
import Subtitle from "../../../components/Subtitle";

const Doctor = ({ doctor }) => {
  const { name, specialization, image } = doctor;
  return (
    <div className="card card-compact card-bordered rounded-sm shadow-md md:w-72">
      <figure>
        <img src={image} className="p-2" alt="doctor" />
      </figure>

      <div className="card-body bg-green-100">
        <Subtitle>{name}</Subtitle>

        <Paragraph fontSize="text-base" lineHeight="leading-normal">
          {specialization}
        </Paragraph>
      </div>
      <div className="card-actions justify-start p-4 bg-green-100">
        <Link>
          <button className="btn bg-green-300 hover:bg-green-200 text-base font-medium text-green-950 rounded-md">
            Book Appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Doctor;
