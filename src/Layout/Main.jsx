import React from "react";
import { Route, Routes } from "react-router-dom";
import Appointment from "../Pages/Appointment/Appointment/Appointment";

import Homepage from "../Pages/Home/Home/Homepage";
import NotFound from "../Pages/NotFound/NotFound";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Main;
