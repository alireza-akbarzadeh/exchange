import React from "react";
import { useLocation } from "react-router";
import DefaultFooter from "./DefaultFotoer";
import FooterAuth from "./FooterAuth";
const Footer = () => {
  const location = useLocation();
  const isFooterAuth =
    location.pathname === "/login" || location.pathname === "/register";
  return isFooterAuth ? <FooterAuth /> : <DefaultFooter />;
};

export default Footer;
