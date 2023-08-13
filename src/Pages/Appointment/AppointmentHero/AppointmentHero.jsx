import React, { useState } from "react";

function AppointmentHero() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const footer = selectedDate ? (
    <p>You picked {format(selectedDate, "PP")}.</p>
  ) : (
    ""
  );
  return (
    <div className="mt-8 mx-4">
      <h1>This is appointment page</h1>
    </div>
  );
}

export default AppointmentHero;
