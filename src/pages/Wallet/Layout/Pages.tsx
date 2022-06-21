import React from "react";
import { useLocation } from "react-router-dom";
import OverView from "../OverView";
import Fiat from "../Fiat";
import Margin from "../Margin";

const Pages = () => {
  const { pathname } = useLocation();
  if (pathname === "/my/wallet/account/overview") return <OverView />;
  if (pathname === "/my/wallet/account/main") return <Fiat />;
  if (pathname === "/my/wallet/account/margin") return <Margin />;
};
export default Pages;
