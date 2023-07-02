import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Doctor from "./Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const { serviceTitle } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:9999/doctors?service=${serviceTitle}`)
      .then((res) => setDoctors(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <section className="mt-16 md:mt-16 mx-4 space-y-8">
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4">
        {doctors.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </section>
  );
};

export default Doctors;
