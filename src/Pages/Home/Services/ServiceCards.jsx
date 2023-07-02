import React from "react";
import Title from "../../../components/Title";
import ServiceCard from "./ServiceCard";
import services from "../../../data/services.json";

const ServiceCards = () => {
  return (
    <section className="mt-16 md:mt-32 mx-4 space-y-8">
      <Title fontWeight="font-medium">
        Book appointment for an in-clinic consultation
      </Title>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
