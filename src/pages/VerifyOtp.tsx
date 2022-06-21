import React from "react";
import AuthCode from "../components/AuthInput";
import { useTranslation } from "react-i18next";

const VerifyOtp = () => {
  const { t } = useTranslation();
  return (
    <div
      className={
        "flex flex-col mx-auto justify-center items-start  max-w-md w-full"
      }
      style={{ minHeight: "80vh" }}
    >
      <h2 className={"mb-4 text-3xl font-bold"}>{t("Mobile_Verification")}</h2>
      <p>{t("Send_Email")}</p>
      <label className={"mb-2 mt-2 font-thin block"} htmlFor="">
        {t("OTP_Verification")}
      </label>
      <div className={"shadow-md border rounded-md p-4 mt-4 "}>
        <div>
          <AuthCode
            containerClassName={"flex  items-center"}
            inputClassName={
              "outline-none rtl:mr-5 ltr:ml-5 w-14 max-w-full px-1 border-gray-200 focus:border-primary-light hover:border-primary-light  h-10 border dir-rtl"
            }
          />
        </div>
      </div>
      <div className={"flex flex-col items-start mt-4 space-y-2.5"}>
        <button className={"text-Link"}>{t("Resend_Message")}</button>
        <button className={"text-Link"}>{t("Didnt_Rsivd_Code")}</button>
      </div>
    </div>
  );
};
export default VerifyOtp;
