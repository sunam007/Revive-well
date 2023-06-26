import React from "react";
import Paragraph from "../../../components/Paragraph";
import Subtitle from "../../../components/Subtitle";

const ServiceCard = ({ service }) => {
  const { title, description, image } = service;
  return (
    <div className="card card-compact card-bordered rounded-sm shadow-md max-w-sm">
      <figure>
        <img src={image} className="p-2" alt="Shoes" />
      </figure>

      <div className="card-body bg-green-100">
        <Subtitle>{title}</Subtitle>

        <Paragraph fontSize="text-base" lineHeight="leading-normal">
          {description}
        </Paragraph>
      </div>
      <div className="card-actions justify-start p-4 bg-green-100">
        <button className="btn bg-green-300 hover:bg-green-200 text-base font-medium text-green-950 rounded-sm">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
