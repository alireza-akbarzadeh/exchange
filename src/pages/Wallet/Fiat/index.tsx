import React from "react";
import FiatHeader from "./FiatHeader";
import { Container } from "./Fiat";
import CoinList from "./CoinList";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Fiat = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <FiatHeader />
      <div className={"md:max-w-2xl mt-10"}>
        <ul
          className={
            "flex flex-wrap flex-col sm:flex-row  justify-between md:max-w-3xl"
          }
        >
          <li>
            <span>{t("Fiat_and_Spot_balance")}</span>
            <p className={"my-2 text-2xl font-medium"}>
              0.00000000
              <span>BTC</span>
            </p>
            <span>=$0.000000</span>
          </li>
          <li>
            <span>{t("Stop_Balance")}</span>
            <p className={"my-2 text-2xl font-medium"}>
              0.00000000
              <span>BTC</span>
            </p>
            <span>=$0.000000</span>
          </li>
          <li>
            <span>{t("Fiat_and_Spot")}</span>
            <p className={"my-2 text-2xl font-medium"}>
              0.00000000
              <span>BTC</span>
            </p>
            <span>=$0.000000</span>
          </li>
          <li>
            <span>{t("Yesterday_PNL")}</span>
          </li>
        </ul>
      </div>
      <CoinList />
    </Container>
  );
};

export default Fiat;
