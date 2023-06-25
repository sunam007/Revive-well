import React from "react";
import Paragraph from "../../../components/Paragraph";
import Subtitle from "../../../components/Subtitle";
import Title from "../../../components/Title";
import ServiceCard from "./ServiceCard";

const ServiceCards = () => {
  return (
    <section className="space-y-8 mt-16 mx-4">
      <div>
        <Title fontWeight="font-medium">
          Book appointment for an in-clinic consultation
        </Title>
        {/* <Paragraph fontSize="text-base">
          Find experienced doctors across all specialties
        </Paragraph> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </section>
  );
};

export default ServiceCards;
