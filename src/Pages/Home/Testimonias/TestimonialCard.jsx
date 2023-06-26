import Paragraph from "../../../components/Paragraph";
import Subtitle from "../../../components/Subtitle";

function TestimonialCard({ testimonial }) {
  const { name, city, image, description } = testimonial;
  return (
    <div className="card card-bordered rounded-sm shadow-md max-w-sm bg-teal-50 text-teal-950">
      <div className="card-body gap-0 space-y-4">
        <Paragraph fontSize="text-base" lineHeight="leading-normal">
          {description}
        </Paragraph>

        <div className="flex space-x-4 items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-teal-200 ring-offset-base-100 ring-inset-1 ">
              <img src={image} />
            </div>
          </div>

          <div>
            <Subtitle fontSize="text-lg">{name}</Subtitle>
            <Paragraph
              fontSize="text-lg"
              fontWeight="font-medium"
              textColor="text-gray-500"
            >
              {city}
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
