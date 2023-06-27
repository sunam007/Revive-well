import React, { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

import appointment_hero from "../../../assets/images/appointment-hero.jpg";

function AppointmentHero() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const footer = selectedDate ? (
    <p>You picked {format(selectedDate, "PP")}.</p>
  ) : (
    ""
  );
  return (
    <div className="hero md:mt-8">
      <div className="flex flex-col md:flex-row-reverse">
        <img
          src={appointment_hero}
          className="w-full md:max-w-md rounded-md shadow-sm"
          alt="girl enjoying life"
        />
        <div className="rounded-md shadow-md h-96 text-teal-950">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            footer={footer}
            modifiersClassNames={{
              today: "my-today",
            }}
            modifiersStyles={{
              today: {
                fontWeight: "bold",
              },
              selected: {
                color: "#16a34a",
                fontSize: "1.25rem",
                fontWeight: "bold",
              },
            }}
          />
          {/* <p className="">You picked {format(selectedDate, "PP")}.</p> */}
        </div>
      </div>
    </div>
  );
}

export default AppointmentHero;
