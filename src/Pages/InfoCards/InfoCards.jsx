import clock from "../../assets/icons/clock.png";
import marker from "../../assets/icons/marker.png";
import phone from "../../assets/icons/phone.png";

import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      title: "Opening Hours",
      description: "Everyday:10am-10pm, Friday:3am-10pm",
      bgColorClass: "bg-green-300",
      textColorClass: "text-green-950",
      icon: clock,
    },
    {
      id: 2,
      title: "Our Location",
      description: "279/6, Kudrat-e-khoda Road, Kantabon, Elephant Road",
      bgColorClass: "bg-teal-300",
      textColorClass: "text-teal-950",
      icon: marker,
    },
    {
      id: 3,
      title: "Contact Us",
      description: "+880-2-9665571",
      bgColorClass: "bg-green-300",
      textColorClass: "text-green-950",
      icon: phone,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
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
