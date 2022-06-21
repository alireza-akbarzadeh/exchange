import Dialog from "components/Modal";
import React, { useContext, useState } from "react";
import Logo from "../../assets/logo.svg";
import { GrSun } from "react-icons/gr";
import { HiOutlineMoon } from "react-icons/hi";
import { AppContext } from "context/AppContext";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const HeaderAuth = () => {
  const { isDark, setIsDark } = useContext(AppContext);
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleFaLng = () => {
    i18next.changeLanguage("fa");
    setShowModal(false);
  };
  const handleEnLng = () => {
    i18next.changeLanguage("en");
    setShowModal(false);
  };
  return (
    <div className="flex items-center justify-between px-5 py-3">
      <img className="h-11" src={Logo} alt="" />
      <div className="flex items-center">
        <Dialog
          showModal={showModal}
          ModalContetntClass="bg-white dark:bg-settingHover"
          setShowModal={setShowModal}
          ModalClass="w-full max-w-3xl"
          btnClass="dark:text-white  text-black font-medium"
          btnTitle={t("Lng")}
          title={t("Choose_Language_And_Region")}
        >
          <div className="border-t">
            <ul className="mt-4 leading-7">
              <li className="cursor-pointer" onClick={handleFaLng}>
                {t("fr")}
              </li>
              <li className="cursor-pointer" onClick={handleEnLng}>
                {t("Lng")}
              </li>
            </ul>
          </div>
        </Dialog>
        <span className="border border-borderColor  h-5 block ltr:ml-4 rtl:mr-4" />
        <div
          className="ltr:ml-4 rtl:mr-4 cursor-pointer "
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? (
            <GrSun className="dark:text-gray-50" />
          ) : (
            <HiOutlineMoon className=" dark:text-green-50 text-black" />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderAuth;
