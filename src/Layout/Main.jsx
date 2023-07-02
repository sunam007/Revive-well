import React from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "../Pages/Home/Home/Homepage";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import NotFound from "../Pages/NotFound/NotFound";
import DoctorsHome from "../Pages/Doctors/DoctorsHome/DoctorsHome";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/doctors/:serviceTitle" element={<DoctorsHome />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Main;
