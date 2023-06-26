import InfoCards from "../InfoCards/InfoCards";

import Hero from "../Hero/Hero";
import ServiceCards from "../Services/ServiceCards";
import TestimonialCards from "../Testimonias/TestimonialCards";

const Homepage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Hero />
      <InfoCards />
      <ServiceCards />
      <TestimonialCards />
      <div className="divider"></div>
    </div>
  );
};

export default Homepage;
