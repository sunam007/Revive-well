import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
// mod 58-8 b6
const PrivateRoute = ({ children }) => {
  // Auth-Context
  const { user, loading } = useContext(AuthContext);

  //route-related
  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <>
        <div className="h-[600] flex justify-center items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      </>
    );
  }

  if (user) return children;

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
