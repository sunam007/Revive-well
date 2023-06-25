import InfoCards from "../InfoCards/InfoCards";

import Hero from "../Hero/Hero";
import ServiceCards from "../Services/ServiceCards";

const Homepage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Hero />
      <InfoCards />
      <ServiceCards />
    </div>
  );
};

export default Homepage;
