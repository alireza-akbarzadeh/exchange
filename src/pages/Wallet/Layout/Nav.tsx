import React from "react";
import { List, ListItem } from "./Wallet";
import { IoWalletOutline } from "react-icons/io5";
import { useRouteMatch, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface INavProps {
  setTabs: (vla: number) => void;
  tabs: number;
}

const Nav = ({ tabs, setTabs }: INavProps) => {
  let match = useRouteMatch();
  const { t } = useTranslation();
  return (
    <div>
      <List>
        <ListItem
          className={
            match.url === "/my/wallet/account/overview" &&
            `${
              t("direction") === "rtl" ? "lg:border-r-4" : "lg:border-l-4"
            } lg:border-b-0 border-b-4 border-primary-light `
          }
          active={match.url === "/my/wallet/account/overview" && true}
        >
          <Link
            className={
              match.url === "/my/wallet/account/overview" && "text-white"
            }
            to={"/my/wallet/account/overview"}
          >
            <IoWalletOutline
              className={
                match.url === "/my/wallet/account/overview"
                  ? "text-primary-dark "
                  : "text-gray-400"
              }
            />
            {t("OverView")}
          </Link>
        </ListItem>
        <ListItem
          className={
            match.url === "/my/wallet/account/main" &&
            `${
              t("direction") === "rtl" ? "lg:border-r-4" : "lg:border-l-4"
            } lg:border-b-0 border-b-4 border-primary-light`
          }
          active={match.url === "/my/wallet/account/main" && true}
        >
          <Link to={"/my/wallet/account/main"}>{t("Fiat_and_Spot")}</Link>
        </ListItem>
        {/*<ListItem*/}
        {/*    className={match.url === "/my/wallet/account/margin" && "rtl:border-r-4 ltr:border-l-4 border-primary-light"}*/}
        {/*    active={match.url === "/my/wallet/account/margin" && true}>*/}
        {/*    <Link to={"/my/wallet/account/margin"}>{t('Margin')}</Link>*/}
        {/*</ListItem>*/}
      </List>
    </div>
  );
};

export default Nav;
