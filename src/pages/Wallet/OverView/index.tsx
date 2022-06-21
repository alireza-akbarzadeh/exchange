import React from "react";
import {
  List,
  ListItem,
  Title,
  Button,
  Card,
  TableListItem,
  TableList,
  Decsription,
  SubTitle,
} from "./OverView";
import { Link } from "react-router-dom";
import { BsFillEyeSlashFill } from "react-icons/bs";
import CardConteiner from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { ReducersType } from "redux/types";
import { changeHideBalance } from "redux/slices/publicSettings";
import { IoWalletOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const OverView = () => {
  const dispatch = useDispatch();
  const publicSettingData = useSelector(
    ({ publicSettings }: ReducersType) => publicSettings.data
  );
  const handleHideBalance = () => dispatch(changeHideBalance());

  const { hideBalance } = publicSettingData;
  const { t } = useTranslation();
  return (
    <>
      <Title>{t("OverView")}</Title>
      <List>
        <ListItem>
          <Button className={"sm-w-11/12 md:w-auto"} active={true}>
            {t("Deposite")}
          </Button>
        </ListItem>
        <ListItem>
          <Button className={"sm-w-11/12 md:w-auto"}>{t("Withdraw")}</Button>
        </ListItem>
        <ListItem>
          <Button className={"sm-w-11/12 md:w-auto"}>{t("Transfer")}</Button>
        </ListItem>
        <ListItem className={"hidden md:block"}>
          <span />
          <Link
            to={""}
            className={
              "text-underline  xl:whitespace-normal text-xs md:text-sm ml-2"
            }
          >
            {t("Transaction_History")}
          </Link>
        </ListItem>
      </List>
      <Card>
        <div className={"flex items-center"}>
          <SubTitle className={"dark:text-gray-500"}>
            {t("Estimate_Blance")}
          </SubTitle>
          <Button
            onClick={handleHideBalance}
            className={"flex ltr:ml-2 rtl:mr-2 dark:text-gray-500"}
          >
            <BsFillEyeSlashFill className={"rtl:ml-2 ltr:mr-2  "} />
            {t("Hide_Balance")}
          </Button>
        </div>
        <div className={"flex mt-3"}>
          {hideBalance ? (
            <div>
              <label htmlFor="" className={"text-2xl dark:text-gray-500"}>
                ********
              </label>
              <span className={"mt-3 text-base dark:text-gray-500"}>
                ********
              </span>
            </div>
          ) : (
            <div>
              <label htmlFor="" className={"text-2xl"}>
                0.000000
              </label>
              <span className={"mt-3 text-base "}>BTC = $0.0000</span>
            </div>
          )}
        </div>
      </Card>
      <TableList>
        <TableListItem>
          {hideBalance ? (
            <div>
              <SubTitle>{t("Fiat_and_Spot")}</SubTitle>
              <label htmlFor="" className={"text-4xl"}>
                ********
              </label>
              <span className={"mt-3 text-base "}>********</span>
            </div>
          ) : (
            <div>
              <SubTitle className={"flex"}>
                <IoWalletOutline />
                First and Spot
              </SubTitle>
              <label htmlFor="" className={"text-2xl"}>
                0.000000
              </label>
              <span className={"mt-3 text-base "}>BTC</span>
            </div>
          )}
          <Decsription
            className={
              "max-w-lg text-xs leading-relaxed  border-l-2 ltr:pl-2 rtl:brder-r-2 rtl:pr-2"
            }
          >
            {t("This_your_spot_trading")}
          </Decsription>
          <div className={"space-x-1.5"}>
            <div className={"space-x-1.5"}>
              <Button className={"hover:bg-gray-200 rtl:ml-2"}>
                {t("Deposite")}
              </Button>
              <Button className={"hover:bg-gray-200"}>{t("Withdraw")}</Button>
            </div>
          </div>
        </TableListItem>
        <TableListItem>
          {hideBalance ? (
            <div>
              <SubTitle>First and Spot</SubTitle>
              <label htmlFor="" className={"text-4xl"}>
                ********
              </label>
              <span className={"mt-3 text-base "}>********</span>
            </div>
          ) : (
            <div>
              <SubTitle>First and Spot</SubTitle>
              <label htmlFor="" className={"text-2xl"}>
                0.000000
              </label>
              <span className={"mt-3 text-base "}>BTC</span>
            </div>
          )}
          <Decsription
            className={"max-w-lg border-l-2 ltr:pl-2 rtl:brder-r-2 rtl:pr-2"}
          >
            {t("This_your_spot_trading")}
          </Decsription>
          <div className={"space-x-1.5"}>
            <div className={"space-x-1.5"}>
              <Button className={"hover:bg-gray-200 rtl:ml-2"}>
                {t("Deposite")}
              </Button>
              <Button className={"hover:bg-gray-200"}>{t("Withdraw")}</Button>
            </div>
          </div>
        </TableListItem>
        <TableListItem>
          {hideBalance ? (
            <div>
              <SubTitle>First and Spot</SubTitle>
              <label htmlFor="" className={"text-2xl"}>
                ********
              </label>
              <span className={"mt-3 text-base "}>********</span>
            </div>
          ) : (
            <div>
              <SubTitle>First and Spot</SubTitle>
              <label htmlFor="" className={"text-2xl"}>
                0.000000
              </label>
              <span className={"mt-3 text-base "}>BTC</span>
            </div>
          )}
          <Decsription
            className={"max-w-lg border-l-2 ltr:pl-2 rtl:brder-r-2 rtl:pr-2"}
          >
            {t("This_your_spot_trading")}
          </Decsription>
          <div className={"space-x-1.5"}>
            <div className={"space-x-1.5"}>
              <Button className={"hover:bg-gray-200 rtl:ml-2"}>
                {t("Deposite")}
              </Button>
              <Button className={"hover:bg-gray-200"}>{t("Withdraw")}</Button>
            </div>
          </div>
        </TableListItem>
      </TableList>
      <div className={"grid sm:grid-cols-12 gap-5 mt-5"}>
        <CardConteiner
          desc={t("Trade_with_Indonesian_rupiah")}
          title={"TokoCrypto"}
          icon={<IoWalletOutline className={"rtl:ml-2 ltr:mr-2"} />}
        />
        <CardConteiner
          desc={t("Trade_with_Indonesian_rupiah")}
          title={"TokoCrypto"}
          icon={<IoWalletOutline className={"rtl:ml-2 ltr:mr-2"} />}
        />
        <CardConteiner
          desc={t("Trade_with_Indonesian_rupiah")}
          title={"TokoCrypto"}
          icon={<IoWalletOutline className={"rtl:ml-2 ltr:mr-2"} />}
        />
        <CardConteiner
          desc={t("Trade_with_Indonesian_rupiah")}
          title={"TokoCrypto"}
          icon={<IoWalletOutline className={"rtl:ml-2 ltr:mr-2"} />}
        />
      </div>
    </>
  );
};

export default OverView;
