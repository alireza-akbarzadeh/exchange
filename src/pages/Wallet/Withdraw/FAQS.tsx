import React from "react";
import { Link } from "react-router-dom";
import { FAQ } from "./withdraw";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { AiOutlineFileText } from "react-icons/ai";
import { FiPlayCircle } from "react-icons/fi";
import { useTranslation } from "react-i18next";
const FAQS = () => {
  const { t } = useTranslation();
  return (
    <>
      <FAQ>
        <h4 className="text-gray-50">{t("FAQ")}</h4>
        <ul>
          <li>
            <FiPlayCircle />
            <span>{t("Video_Tutorial")}</span>
          </li>
          <li>
            <AiOutlineFileText />
            <span>{t("How_to_Deposit_Crypto_Step_by_Step_Guide")}</span>
          </li>
          <li>
            <AiOutlineFileText />
            <span>{t("Why_has_my_Deposit_not_Been_Created_Yet")}</span>
          </li>
          <li>
            <AiOutlineFileText />
            <span>{t("How_To_Buy_Crypto_and_Get_Started_on_Binance")}</span>
          </li>
        </ul>
      </FAQ>
    </>
  );
};

export default FAQS;
