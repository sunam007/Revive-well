import React from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "../Pages/Home/Home/Homepage";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import NotFound from "../Pages/NotFound/NotFound";
import DoctorsHome from "../Pages/Doctors/DoctorsHome/DoctorsHome";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../routes/PrivateRoute/PrivateRoute";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/doctors/:serviceTitle"
        element={
          <PrivateRoute>
            <DoctorsHome />
          </PrivateRoute>
        }
      />
      <Route
        path="/appointment"
        element={
          <PrivateRoute>
            <Appointment />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Main;
