import { Route, Routes } from "react-router-dom";

import Homepage from "../Pages/Home/Home/Homepage";
import NotFound from "../Pages/NotFound/NotFound";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Main;
