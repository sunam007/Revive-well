import React from "react";
import Title from "../../../components/Title";

function DoctorsHeader({ children, service }) {
  const { title, description, image } = service;

  return (
    <section className="max-w-screen-2xl">
      <div className="text-center mt-8">
        <Title>{children}</Title>
        <div className="divider"></div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start px-4  space-y-8 md:space-x-8">
        <figure>
          <img src={image} className="rounded w-96" alt="Album" />
        </figure>
        <div className="w-full md:w-1/3 space-y-4 max-w-prose">
          <h2 className="card-title justify-center md:justify-start">
            {title}
          </h2>
          <p className="md:text-left">{description}</p>
        </div>
      </div>
    </section>
  );
}

export default DoctorsHeader;
