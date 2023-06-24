import Paragraph from "../../../components/Paragraph";
import Subtitle from "../../../components/Subtitle";
const InfoCard = ({ card }) => {
  const { title, description, bgColorClass, textColorClass, icon } = card;

  return (
    <div
      className={`card lg:card-side rounded-sm shadow-xl  max-w-md  
      ${bgColorClass}  ${textColorClass} `}
    >
      <figure>
        <img src={icon} className="w-20 p-4" alt="information card" />
      </figure>
      <div className="card-body">
        <Subtitle fontSize="text-sm">{title}</Subtitle>
        <Paragraph fontSize="text-sm" lineHeight="leading-loose">
          {description}
        </Paragraph>
      </div>
    </div>
  );
};

export default InfoCard;
