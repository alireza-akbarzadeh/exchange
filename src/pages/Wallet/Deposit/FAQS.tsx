import React from "react";
import { Link } from "react-router-dom";
import { FAQ } from "./Desposit";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { AiOutlineFileText } from "react-icons/ai";
import { FiPlayCircle } from "react-icons/fi";
import { useTranslation } from "react-i18next";
const FAQS = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={"flex justify-between items-center mx-2"}>
        <h4 className="text-white">{t("Deposit_hasnt_Arrived")}</h4>
        <Link to={"#"} className="text-underline text-gray-50">
          {t("Learn_More")}
        </Link>
      </div>
      <div className={"m-2"}>
        <p className={"mt-4 text-sm leading-6 md:text-base text-darkMode"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ducimus
          ipsa mollitia nemo officiis? Aliquam, consequuntur, ut. Aut
          laboriosam, molestiae nostrum perferendis qui ut!
        </p>
        <ul className={"space-y-2 list-disc text-sm md:text-base mt-4 text-darkMode"}>
          <li>Deposit hs not Arrived after and long time</li>
          <li>Didnt Enter Memo/tag correctly </li>
          <li>Deposit Unlisted Coin</li>
        </ul>
      </div>
      <div className={"mt-8"}>
        <button
          className={
            "flex bg-gray-200 px-4 rounded-xl py-1 items-center text-sm md:text-base"
          }
        >
          {t("Learn_More")}
          {t("direction") === "rtl" ? (
            <BsArrowLeftShort />
          ) : (
            <BsArrowRightShort />
          )}
        </button>
      </div>
      <FAQ>
        <h4 className="text-white">{t("FAQ")}</h4>
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
