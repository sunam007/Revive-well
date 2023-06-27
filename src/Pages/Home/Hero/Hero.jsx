import React from "react";
import hero from "../../../assets/images/hero.jpg";
import Paragraph from "../../../components/Paragraph";
import Title from "../../../components/Title";
import Button from "../../../components/Button";

function Hero() {
  return (
    <div className="hero md:mt-8">
      <div className="hero-content flex-col lg:flex-row space-y-4 md:spcae-y-0 lg:space-x-12">
        <img
          src={hero}
          className="w-full lg:w-1/2 rounded-none shadow-sm"
          alt="girl enjoying life"
        />

        <div className="space-y-4">
          <Title>
            Enjoy A Stress <span className="text-green-600">Free Life</span>{" "}
          </Title>
          <Paragraph>
            We provide compassionate support and expert guidance, empowering you
            to overcome challenges, find balance, and embrace a fulfilling life
            of well-being.
          </Paragraph>
          <div>
            <Button>Book Appointment</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
