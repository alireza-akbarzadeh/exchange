import React from "react";
import { List, ListItem, Button, ItemLink } from "./Fiat";
import Table from "../../../components/table";
import { useTranslation } from "react-i18next";
import { CgArrowAlignV } from "react-icons/cg";
import BTC from "../../../assets/Coins/btc.svg";
import moac from "../../../assets/Coins/moac.svg";
import aion from "../../../assets/Coins/aion.svg";
import kcs from "../../../assets/Coins/kcs.svg";
import ae from "../../../assets/Coins/ae.svg";
const CoinList = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={"max-w-2xl mt-10"}>
        <ul
          className={
            "flex space-y-2 space-x-4  flex-col sm:flex-row items-start flex-wrap sm:items-center"
          }
        >
          <li>
            <input
              type="text"
              placeholder={t("Searh_Coin")}
              className={
                "border outline-none px-2 py-1 text-base w-full h-9 focus:border-primary  hover:border-primary"
              }
            />
          </li>
          <li>
            <label htmlFor="" className={"flex items-center"}>
              <input
                type="checkbox"
                className={"hover:border-primary mb-1 ltr:mr-1 rtl:ml-1"}
              />
              <span
                className={
                  "border-dashed border-b border-textGray py-1 border-black text-xs md:text-sm"
                }
              >
                {t("Hide_Small_Balance")}
              </span>
            </label>
          </li>
          <li>
            <button
              className={"text-underline text-Link py-1 text-xs md:text-sm"}
            >
              {t("Convert_Small_Balance_TO_BNP")}
            </button>
          </li>
        </ul>
      </div>
      <Table>
        <Table.Container>
          <Table.Content>
            <Table.UI>
              <Table.Tables>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>
                      <Table.Row>
                        {t("Coin")}
                        <CgArrowAlignV />
                      </Table.Row>
                    </Table.Th>
                    <Table.Th>
                      <Table.Row>
                        {t("Total")}
                        <CgArrowAlignV />
                      </Table.Row>
                    </Table.Th>
                    <Table.Th>
                      <Table.Row>
                        {t("Available")}
                        <CgArrowAlignV />
                      </Table.Row>
                    </Table.Th>
                    <Table.Th>
                      <Table.Row>
                        {t("In_Order")}
                        <CgArrowAlignV />
                      </Table.Row>
                    </Table.Th>
                    <Table.Th>
                      <Table.Row>
                        {t("Btc_Value")}
                        <CgArrowAlignV />
                      </Table.Row>
                    </Table.Th>
                    <Table.Th>
                      <Table.Row>{t("ACtion")}</Table.Row>
                    </Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  <Table.Tr>
                    <Table.Td>
                      <Table.Row>
                        <div>
                          <img
                            className={"w-7 h-10 max-w-xl"}
                            src={BTC}
                            alt="Btc Coin"
                          />
                        </div>
                        <div className={"ltr:ml-2 mt-1 rtl:mr-2"}>
                          BTc
                          <span className={"block mt-1 text-textGray"}>
                            Bitcoin
                          </span>
                        </div>
                      </Table.Row>
                    </Table.Td>
                    <Table.Td>0.00000000</Table.Td>
                    <Table.Td>0.00000000</Table.Td>
                    <Table.Td>0.00000000</Table.Td>
                    <Table.Td>0.00000000</Table.Td>
                    <Table.Td>
                      <Table.Row >
                        <Button className={"text-Link"}>{t("Deposit")}</Button>
                        <Button className={"text-Link"}>{t("Tread")}</Button>
                        <Button className={"text-Link"}>{t("Convert")}</Button>
                        <Button className={"text-Link"}>{t("Buy")}</Button>
                      </Table.Row>
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <Table.Row>
                        <div>
                          <img
                            className={"w-7 h-10 max-w-xl"}
                            src={moac}
                            alt="Btc Coin"
                          />
                        </div>
                        <div className={"ltr:ml-2 mt-1 rtl:mr-2"}>
                          BTc
                          <span className={"block mt-1 text-textGray"}>
                            Bitcoin
                          </span>
                        </div>
                      </Table.Row>
                    </Table.Td>
                    <Table.Td>0.00000000</Table.Td>
                    <Table.Td>0.00000000</Table.Td>
                    <Table.Td>0.00000000</Table.Td>
                    <Table.Td>0.00000000</Table.Td>
                    <Table.Td>
                      <Table.Row>
                        <Button className={"text-Link"}>{t("Deposit")}</Button>
                        <Button className={"text-Link"}>{t("Tread")}</Button>
                        <Button className={"text-Link"}>{t("Convert")}</Button>
                        <Button className={"text-Link"}>{t("Buy")}</Button>
                      </Table.Row>
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <Table.Row>
                        <div>
                          <img
                            className={"w-7 h-10 max-w-xl"}
                            src={aion}
                            alt="Btc Coin"
                          />
                        </div>
                        <div className={"ltr:ml-2 mt-1 rtl:mr-2"}>
                          BTc
                          <span className={"block mt-1 text-textGray"}>
                            Bitcoin
                          </span>
                        </div>
                      </Table.Row>
                    </Table.Td>
                    <Table.Td>0.00000000</Table.Td>
                    <Table.Td>0.00000000</Table.Td>
                    <Table.Td>0.00000000</Table.Td>
                    <Table.Td>0.00000000</Table.Td>
                    <Table.Td>
                      <Table.Row>
                        <Button className={"text-Link"}>{t("Deposit")}</Button>
                        <Button className={"text-Link"}>{t("Tread")}</Button>
                        <Button className={"text-Link"}>{t("Convert")}</Button>
                        <Button className={"text-Link"}>{t("Buy")}</Button>
                      </Table.Row>
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <Table.Row>
                        <div>
                          <img
                            className={"w-7 h-10 max-w-xl"}
                            src={ae}
                            alt="Btc Coin"
                          />
                        </div>
                        <div className={"ltr:ml-2 mt-1 rtl:mr-2"}>
                          BTc
                          <span className={"block mt-1 text-textGray"}>
                            Bitcoin
                          </span>
                        </div>
                      </Table.Row>
                    </Table.Td>
                    <Table.Td>0.00000000</Table.Td>
                    <Table.Td>0.00000000</Table.Td>
                    <Table.Td>0.00000000</Table.Td>
                    <Table.Td>0.00000000</Table.Td>
                    <Table.Td>
                      <Table.Row>
                        <Button className={"text-Link"}>{t("Deposit")}</Button>
                        <Button className={"text-Link"}>{t("Tread")}</Button>
                        <Button className={"text-Link"}>{t("Convert")}</Button>
                        <Button className={"text-Link"}>{t("Buy")}</Button>
                      </Table.Row>
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <Table.Row>
                        <div>
                          <img
                            className={"w-7 h-10 max-w-xl"}
                            src={kcs}
                            alt="Btc Coin"
                          />
                        </div>
                        <div className={"ltr:ml-2 mt-1 rtl:mr-2"}>
                          BTc
                          <span className={"block mt-1 text-textGray"}>
                            Bitcoin
                          </span>
                        </div>
                      </Table.Row>
                    </Table.Td>
                    <Table.Td>0.00000000</Table.Td>
                    <Table.Td>0.00000000</Table.Td>
                    <Table.Td>0.00000000</Table.Td>
                    <Table.Td>0.00000000</Table.Td>
                    <Table.Td>
                      <Table.Row>
                        <Button className={"text-Link"}>{t("Deposit")}</Button>
                        <Button className={"text-Link"}>{t("Tread")}</Button>
                        <Button className={"text-Link"}>{t("Convert")}</Button>
                        <Button className={"text-Link"}>{t("Buy")}</Button>
                      </Table.Row>
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <Table.Row>
                        <div>
                          <img
                            className={"w-7 h-10 max-w-xl"}
                            src={BTC}
                            alt="Btc Coin"
                          />
                        </div>
                        <div className={"ltr:ml-2 mt-1 rtl:mr-2"}>
                          BTc
                          <span className={"block mt-1 text-textGray"}>
                            Bitcoin
                          </span>
                        </div>
                      </Table.Row>
                    </Table.Td>
                    <Table.Td>0.00000000</Table.Td>
                    <Table.Td>0.00000000</Table.Td>
                    <Table.Td>0.00000000</Table.Td>
                    <Table.Td>0.00000000</Table.Td>
                    <Table.Td>
                      <Table.Row>
                        <Button className={"text-Link"}>{t("Deposit")}</Button>
                        <Button className={"text-Link"}>{t("Tread")}</Button>
                        <Button className={"text-Link"}>{t("Convert")}</Button>
                        <Button className={"text-Link"}>{t("Buy")}</Button>
                      </Table.Row>
                    </Table.Td>
                  </Table.Tr>
                </Table.Tbody>
              </Table.Tables>
            </Table.UI>
          </Table.Content>
        </Table.Container>
      </Table>
    </>
  );
};

export default CoinList;
