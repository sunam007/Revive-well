import BookingForm from "./BookingForm";

const BookingModal = ({ bookedDoctor }) => {
  return (
    <dialog id="booking_modal" className="modal">
      <BookingForm bookedDoctor={bookedDoctor} />
    </dialog>
  );
};

export default BookingModal;
