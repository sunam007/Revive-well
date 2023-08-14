import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import addDays from "date-fns/addDays";

import { AuthContext } from "../../../contexts/AuthProvider";

const BookingForm = ({ bookedDoctor }) => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);

  // destructuring from react -hook form
  const { register } = useForm();

  const handleCalendarClose = () => console.log("date selected", startDate);

  return (
    <form method="dialog" className="modal-box card-body rounded-md">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
        ✕
      </button>

      <div className="card w-72 mx-auto justify-center items-center space-y-8">
        <h3 className="font-bold text-lg text-center">Book Appointment</h3>

        <div className="divider"></div>

        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          onCalendarClose={handleCalendarClose}
          minDate={new Date()}
          maxDate={addDays(new Date(), 5)}
          isClearable
          placeholderText="Select appointment date"
          className="input input-bordered input-accent w-72  max-w-xs"
        />

        <input
          type="text"
          id="patientName"
          {...register("patientName")}
          placeholder="Patient's Name"
          className="input input-bordered input-accent w-full max-w-xs"
        />

        <input
          type="email"
          id="email"
          {...register("email")}
          placeholder="Email"
          defaultValue={user?.email}
          readOnly
          className="input input-bordered input-accent w-full max-w-xs"
        />

        <input
          type="text"
          id="doctorName"
          {...register("doctorName")}
          placeholder="Doctor"
          defaultValue={bookedDoctor}
          readOnly
          className="input input-bordered input-accent w-full max-w-xs"
        />

        <textarea
          id="message"
          {...register("message")}
          placeholder="Message"
          className="textarea textarea-accent w-full max-w-xs"
        />

        <button className="btn btn-accent btn-block max-w-xs">
          Confirm Appointment
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
