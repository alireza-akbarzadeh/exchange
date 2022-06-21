import React from "react";
import { Title, Header, List, ListItem, Button, ItemLink } from "./Fiat";
import { useTranslation } from "react-i18next";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { HiOutlineExclamationCircle } from "react-icons/hi";
const FiatHeader = () => {
  const { t } = useTranslation();
  return (
    <Header>
      <div className={"flex items-center"}>
        <Title>{t("Fiat_and_Spot")}</Title>
        <Button className={"flex items-center"}>
          <AiOutlineEyeInvisible className={"rtl:ml-2 ltr:mr-2"} />
          {t("Hide_Balacne")}
        </Button>
      </div>
      <List>
        <ListItem>
          <Button active={true}>{t("Deposite")}</Button>
        </ListItem>
        <ListItem>
          <Button>{t("Withdraw")}</Button>
        </ListItem>
        <ListItem>
          <Button>{t("Pay")}</Button>
        </ListItem>
        <ListItem>
          <Button>{t("Wallet_Direct")}</Button>
        </ListItem>
        <ListItem>
          <div className={"flex items-center"}>
            <HiOutlineExclamationCircle className={"mx-3"} />
            <span className={"border block h-7 mx-3 "} />
          </div>
        </ListItem>
        <ListItem>
          <ItemLink className={"whitespace-nowrap"} to={"#"}>
            {t("Deposit_Withdraw_History")}
          </ItemLink>
        </ListItem>
      </List>
    </Header>
  );
};

export default FiatHeader;
