import React from "react";
import { Title, Header, Item, Container, Row } from "./Desposit";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { CgMenu, CgMenuGridO } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import ResentDeposit from "./ResentDepoit";
import FAQS from "./FAQS";
import Forms from "./Forms";
const DepositWallet = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Header className={"mb-16"}>
        <Item>
          <Title>{t("DEPOSIT_CRYPTO")}</Title>
          {t("direction") === "rtl" ? (
            <IoIosArrowBack className="dark:text-darkMode" />
          ) : (
            <IoIosArrowForward className="dark:text-darkMode" />
          )}
        </Item>
        <Item className={"bg-gray-200 px-2 py-1 text-sm rounded-md"}>
          <span className={"text-xs md-text-lg"}>{t("DEPOSIT_First")}</span>
          {t("direction") === "rtl" ? (
            <BsArrowLeftShort className={"text-3xl"} />
          ) : (
            <BsArrowRightShort className={"text-3xl"} />
          )}
        </Item>
      </Header>
      <Row>
        <div className={"col-span-2 md:mt-10 md:space-y-24 dark:text-darkMode"}>
          <div>{t("Section_Coin")}</div>
          <div>{t("Deposit_TO")}</div>
        </div>
        <div className={"col-span-5 md:max-w-lg"}>
          <Forms
            address={"poklhjghdfuywdklaskdajslkdasudoasesdd"}
            memo={"qwrttrimbcxlkjadhg"}
          />
        </div>
        <div className={"col-span-5"}>
          <FAQS />
        </div>
      </Row>
      <div
        className={
          "flex items-start md:items-center justify-between flex-col md:flex-row space-y-4 md:space-y-0"
        }
      >
        <div className={"flex items-center space-x-3 dark:text-darkMode "}>
          <h3>{t("Recent_Deposit")}</h3>
          <button>
            <CgMenu />
          </button>
          <button>
            <CgMenuGridO />
          </button>
        </div>
        <div className={"text-Gray underline text-base"}>
          {t("Deposit_Has_Arrived")}
        </div>
      </div>
      {/*{ Resent Deposit }*/}
      <div>
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <ResentDeposit
            address="pcUasdasyamnjasdhsl"
            texId="texIdadsaslpouwyrstes"
            key={item}
          />
        ))}
        <button className={"mt-10 underline text-Gray"}>{t("ViewAll")}</button>
      </div>
    </Container>
  );
};

export default DepositWallet;
