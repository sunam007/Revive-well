import React, { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../src/firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(app);

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userInfo = { createUser };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
