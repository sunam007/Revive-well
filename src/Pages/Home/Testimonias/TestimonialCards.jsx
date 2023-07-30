import Title from "../../../components/Title";
import TestimonialCard from "./TestimonialCard";
// import data from "./testimonialData.json";
import data from "../../../data/testimonialData.json";
import quote from "../../../assets/icons/quote.svg";

function TestimonialCards() {
  return (
    <section className="mt-16 md:mt-32 mx-4 space-y-8">
      <div className="flex justify-between items-baseline">
        <Title fontWeight="font-medium">What Our Patients Say</Title>

        <img src={quote} className="w-16 md:w-20" alt="double comma sign" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}

export default TestimonialCards;
