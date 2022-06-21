import Dialog from "components/Modal";
import i18next, { TFunction } from "i18next";
import React, { useState } from "react";
import { ListItems } from "./styled.Header";

interface LangUSDDialogProps {
  t: TFunction;
}
export default function LanUSDDialog({ t }: LangUSDDialogProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [indexTab, setIndexTab] = useState<number>(0);
  const handleOpenModal = (index: number) => {
    setIndexTab(index);
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="flex">
        <ListItems className="group">
          <span
            onClick={() => handleOpenModal(0)}
            className="group-hover:text-primary-light "
          >
            {t("Usd")}
          </span>
          <span className="border w-3 h-3 border-borderColor rtl:mr-4 ltr:ml-4" />
        </ListItems>
        <ListItems className="group">
          <span
            onClick={() => handleOpenModal(1)}
            className="group-hover:text-primary-light "
          >
            {t("Lng")}
          </span>
        </ListItems>
        <Dialog
          ModalContetntClass="bg-white dark:bg-settingHover"
          showModal={showModal}
          ModalClass="max-w-4xl w-full"
          title="Language and Region"
          setShowModal={setShowModal}
        >
          <DialogChilldren
            tabIndex={indexTab}
            setTabIndex={setIndexTab}
            showModal={showModal}
            setShowModal={setShowModal}
            t={t}
          />
        </Dialog>
      </div>
    </>
  );
}

interface DialogChilldrenProps {
  tabIndex: number;
  showModal: boolean;
  setTabIndex: (value: number) => void;
  setShowModal: (value: boolean) => void;
  t: TFunction;
}
const DialogChilldren = ({
  tabIndex,
  setTabIndex,
  t,
  setShowModal,
}: DialogChilldrenProps) => {
  const handleChangeLang = (lang: string) => i18next.changeLanguage(lang);
  const handleChangeFaLng = () => {
    handleChangeLang("fa");
    setShowModal(false);
  };
  const handleChangeEnLng = () => {
    handleChangeLang("en");
    setShowModal(false);
  };
  return (
    <>
      <div
        className={`
            ${t("direction") === "rtl" ? "text-right " : "text-left"} text-black
            `}
      ></div>
      <div
        className={` ${
          t("direction") === "rtl" ? "text-right" : "text-left"
        } border-t pt-3`}
      >
        <div className={`flex`}>
          <h3 className="text-black font-medium mb-4 ">Choose a Language</h3>
        </div>
        {tabIndex === 1 ? (
          <ul
            className={`text-black font-medium  space-y-2 ${
              t("direction") === "rtl" ? "text-right" : "text-left"
            }`}
          >
            <li className="cursor-pointer" onClick={handleChangeEnLng}>
              English{" "}
            </li>
            <li className="cursor-pointer" onClick={handleChangeFaLng}>
              فارسی
            </li>
          </ul>
        ) : (
          <ul className="text-black font-medium">
            <li>USD</li>
            <li>AED</li>
            <li>Bob</li>
            <li>NGN</li>
            <li>PKR</li>
          </ul>
        )}
      </div>
    </>
  );
};
