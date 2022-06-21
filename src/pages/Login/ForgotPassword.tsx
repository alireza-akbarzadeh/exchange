import Dialog from "components/Modal";
import React from "react";
import { useTranslation } from "react-i18next";
const ForgotPassword = () => {
  const [showModal, setShowModal] = React.useState(false);
  const { t } = useTranslation();
  return (
    <Dialog
      haveAnimate={true}
      showModal={showModal}
      ModalClass="w-full max-w-sm"
      ModalContetntClass="dark:bg-settingHover bg-white"
      btnClass="hover:text-secoundry-light text-Link "
      setShowModal={setShowModal}
      btnTitle={t("Forgot_Password")}
    >
      <div className="flex justify-center items-start mb-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 96 96"
          fill="none"
          className="h-24"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M88 48c0 22.091-17.909 40-40 40S8 70.091 8 48 25.909 8 48 8s40 17.909 40 40z"
            fill="url(#general-warning_svg__paint0_linear)"
          ></path>
          <path
            d="M48 19c16.016 0 29 12.984 29 29S64.016 77 48 77 19 64.016 19 48s12.984-29 29-29z"
            fill="url(#general-warning_svg__paint1_linear)"
          ></path>
          <path d="M45 66h6v-6h-6v6zM51 54V30h-6v24h6z" fill="#14151A"></path>
          <defs>
            <linearGradient
              id="general-warning_svg__paint0_linear"
              x1="8"
              y1="48"
              x2="102.5"
              y2="48"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F0B90B" stop-opacity="0"></stop>
              <stop offset="1" stop-color="#F0B90B"></stop>
            </linearGradient>
            <linearGradient
              id="general-warning_svg__paint1_linear"
              x1="77"
              y1="48"
              x2="19"
              y2="48"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F0B90B"></stop>
              <stop offset="1" stop-color="#F8D33A"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="mx-auto ">
        <p className="dark:text-textGray">{t("For_Security_Purposes")}</p>
        <div className="flex justify-between mt-4">
          <button
            onClick={() => setShowModal(false)}
            className="bg-gray-300 ox-4 py-2 rounded-md w-full ltr:mr-4 rtl:ml-4 outline-none"
          >
            {t("Cancel")}
          </button>
          <button className="bg-primary-light ox-4 py-2 rounded-md w-full outline-none ">
            {t("Continue")}
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default ForgotPassword;
