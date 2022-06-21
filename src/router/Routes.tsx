import {
  Login,
  Home,
  Register,
  InMail,
  Wallet,
  VerifyOtp,
  VerifyEmail,
  Withdraw,
  DepositWallet,
  GoogleAuth
} from "../pages";
import { RouteProps } from "react-router-dom";

const routes: RouteProps[] = [
  {
    component: Home,
    path: "/",
    exact: true,
  },
  {
    component: Login,
    path: "/login",
    exact: true,
  },
  {
    component: VerifyOtp,
    path: "/register/verifyOtp",
    exact: true,
  },
  {
    component: VerifyEmail,
    path: "/register/verifyEmail",
    exact: true,
  },
  {
    component: Register,
    path: "/register",
    exact: true,
  },
  {
    component: InMail,
    path: "/inmail",
    exact: true,
  },
  {
    component: Wallet,
    path: " ",
    exact: true,
  },
  {
    component: Withdraw,
    path: "/my/wallet/account/main/withdrawal",
    exact: true,
  },
  {
    component: DepositWallet,
    path: "/my/wallet/account/main/deposit",
    exact: true,
  },
  {
    component: Wallet,
    path: "/my/wallet/account/main",
    exact: true,
  },
  {
    component: GoogleAuth,
    path: "/enable-google-authenticator",
    exact: true,
  },
  {
    component: Wallet,
    path: "/my/wallet/account/margin",
    exact: true,
  },
];

export default routes;
