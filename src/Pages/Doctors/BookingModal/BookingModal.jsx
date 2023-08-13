import React, { useState } from "react";
import { useContext } from "react";
import DatePicker from "react-datepicker";
import addDays from "date-fns/addDays";

import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ bookedDoctor }) => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);

  const MyContainer = ({ className, children }) => {
    return (
      <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
        <div style={{ background: "#f0f0f0" }}>What is your favorite day?</div>
        <div style={{ position: "relative" }}>{children}</div>
      </div>
    );
  };

  return (
    <dialog id="booking_modal" className="modal">
      <form method="dialog" className="modal-box card-body rounded-md">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <div className="card w-96 mx-auto justify-center items-center space-y-8">
          <h3 className="font-bold text-lg text-center">Book Appointment</h3>

          <div className="divider"></div>

          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date()}
            maxDate={addDays(new Date(), 5)}
            isClearable
            placeholderText="Select appointment date"
            className="input input-bordered input-accent w-80 max-w-xs"
          />

          <input
            type="text"
            id="patientName"
            placeholder="Patient's Name"
            className="input input-bordered input-accent w-full max-w-xs"
          />

          <input
            type="email"
            id="email"
            placeholder="Email"
            defaultValue={user?.email}
            readOnly
            className="input input-bordered input-accent w-full max-w-xs"
          />

          <input
            type="text"
            id="doctorName"
            placeholder="Doctor"
            defaultValue={bookedDoctor}
            readOnly
            className="input input-bordered input-accent w-full max-w-xs"
          />

          <textarea
            className="textarea textarea-accent w-full max-w-xs"
            placeholder="Message"
          />

          <button className="btn btn-accent btn-block max-w-xs">
            Confirm Appointment
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default BookingModal;
