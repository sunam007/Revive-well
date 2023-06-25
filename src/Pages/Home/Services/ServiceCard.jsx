import counselling from "../../../assets/images/counselling.jpg";
import Button from "../../../components/Button";
import Paragraph from "../../../components/Paragraph";
import Subtitle from "../../../components/Subtitle";
const ServiceCard = () => {
  return (
    <div className="card rounded-sm shadow-md max-w-md ">
      <figure>
        <img src={counselling} className="p-2" alt="Shoes" />
      </figure>
      <div className="card-body space-y-8 bg-green-100 ">
        <div>
          <Subtitle>This is also title</Subtitle>
          <Paragraph fontSize="text-base" lineHeight="leading-normal">
            If a dog chews shoes whose shoes does he choose?
          </Paragraph>
        </div>
        <div className="card-actions justify-start">
          <button className="btn bg-green-300 hover:bg-green-200 text-base font-medium text-green-950 rounded-sm">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
