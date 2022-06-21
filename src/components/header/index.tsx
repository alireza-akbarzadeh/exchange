import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./header";
import HeaderAuth from "./HeaderAuth";

const Index = () => {
  const location = useLocation();
  const isSignInPages =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/enable-google-authenticator";

  return isSignInPages ? <HeaderAuth /> : <Header />;
};

export default Index;
