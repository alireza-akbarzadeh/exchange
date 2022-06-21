import React from "react";
import { FormControl, Input } from "./withdraw";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useTranslation } from "react-i18next";
import Dialog from "../../../components/Modal";
interface ICoinProps {
  labelTitle?: string;
  children?: React.ReactNode;
}

const Coin = ({ labelTitle, children }: ICoinProps) => {
  const [showModal, setShowModal] = React.useState(false);
  const handleOpenModalCoin = () => {
    setShowModal(!showModal);
  };
  const { t } = useTranslation();
  return (
    <>
      <FormControl>
        <label className="dark:text-gray-50" htmlFor="">{labelTitle}</label>
        <Input onClick={handleOpenModalCoin} type="text" />
        {showModal ? (
          <IoMdArrowDropup
            className={`absolute top-12 ${t("direction") === "rtl" ? "left-4" : "right-4"
              }`}
          />
        ) : (
          <IoMdArrowDropdown
            className={`absolute top-12 ${t("direction") === "rtl" ? "left-4" : "right-4"
              }`}
          />
        )}
      </FormControl>
      <Dialog
        haveAnimate={true}
        showModal={showModal}
        ModalClass="w-full max-w-sm"
        ModalContetntClass="dark:bg-settingHover bg-white"
        btnClass="hover:text-secoundry-light text-Link "
        setShowModal={setShowModal}
        closeIcon={true}
      >
        {children}
      </Dialog>
    </>
  );
};

export default Coin;
