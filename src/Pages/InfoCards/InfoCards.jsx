import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      title: "Opening Hours",
      description: "Saturday-Thursday: 10 AM - 10PM , Friday: 3PM - 10PM",
      bgColorClass: "bg-teal-400",
      textColorClass: "text-teal-950",
      icon: clock,
    },
    {
      id: 2,
      title: "Opening Hours",
      description: "279/6, Kudrat-e-khoda Road, Kantabon, Elephant Road",
      bgColorClass: "bg-green-400",
      textColorClass: "text-green-950",
      icon: marker,
    },
    {
      id: 3,
      title: "Contact Us",
      description: "+880-2-9665571 , +880-2-9665572",
      bgColorClass: "bg-teal-400",
      textColorClass: "text-teal-950",
      icon: phone,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cardData.map((card) => (
        <InfoCard key={card.id} card={card} />
      ))}
    </div>
  );
};

{
  /* <InfoCard key={card.id} card={card} /> */
}

export default InfoCards;
