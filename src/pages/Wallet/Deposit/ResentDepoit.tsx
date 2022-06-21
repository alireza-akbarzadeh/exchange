import { useState, useEffect } from "react";
import Coin from "../../../assets/Coins/etc.svg";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineContentCopy,
} from "react-icons/md";
import { BiLinkAlt } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import useCopyToClipboard from "../../../Hook/useCopyToClipboard";

const ResentDeposit = ({ address, texId }) => {
  const { t } = useTranslation();

  const [memoTxt, copyMemo] = useCopyToClipboard();

  return (
    <div
      className={
        "mt-6 flex items-center flex-wrap justify-between space-y-7 md:space-y-0"
      }
    >
      <div className={"flex items-center space-x-2.5"}>
        <p className={"flex items-center dark:text-darkMode"}>
          <img className={"rtl:ml-2 ltr:mr-2 "} src={Coin} alt="" />
          0.00001
        </p>
        <div
          className="bg-green-200  py-1 px-2 opacity-60 rounded-md "
          style={
            t("direction") === "rtl" ? { marginRight: 10 } : { marginLeft: 10 }
          }
        >
          <span className={"text-green-600   text-xs  font-bold"}>
            {t("Completed")}
          </span>
        </div>
      </div>
      <div className={"flex items-center"}>
        <span className={"text-Gray "}>{t("Address")}</span>
        <span className={"flex-1 ltr:ml-2 rtl:mr-2 text-darkMode"}>{address}</span>
        <div className={"space-x-2 flex ltr:ml-2 rtl:mr-2 relative"}>
          <BiLinkAlt className="dark:text-textGray rtl:ml-2 ltr:mr-2" />
          <MdOutlineContentCopy
            className={"text-Gray cursor-pointer"}
            onClick={() => copyMemo(address)}
          />
          {memoTxt && (
            <span
              className={
                "absolute whitespace-nowrap px-2 py-1 text-xs bottom-5 bg-primary-light text-black rounded-md"
              }
            >
              {t("Copied")}
            </span>
          )}
        </div>
      </div>
      <div className={"flex items-center "}>
        <span className={"text-Gray"}>TxId</span>
        <span className={"ltr:ml-2 rtl:mr-2 dark:text-darkMode"}>{texId}</span>
        <div className={"space-x-2 flex ltr:ml-2 rtl:mr-2 relative"}>
          <BiLinkAlt className="dark:text-textGray rtl:ml-2 ltr:mr-2" />
          <MdOutlineContentCopy
            className={"text-Gray cursor-pointer"}
            onClick={() => copyMemo(texId)}
          />
          {memoTxt && (
            <span
              className={
                "absolute whitespace-nowrap px-2 py-1 text-xs bottom-5 bg-primary-light text-black rounded-md"
              }
            >
              {t("Copied")}
            </span>
          )}
        </div>
      </div>
      <div>
        {t("direction") === "rtl" ? (
          <MdKeyboardArrowLeft />
        ) : (
          <MdKeyboardArrowRight />
        )}
      </div>
    </div>
  );
};

export default ResentDeposit;
