import { FormControl, Form, Input, Memo, Code } from "./Desposit";
import { ImQrcode } from "react-icons/im";
import { MdOutlineContentCopy } from "react-icons/md";
import { useTranslation } from "react-i18next";
import useCopyToClipboard from "../../../Hook/useCopyToClipboard";
import Coin from "./Coin";
import btc from "../../../assets/Coins/btc.svg";
import QR from "../../../assets/images/qr.png";
import { BiSearch } from "react-icons/all";
interface ICopiedData {
  addressTxt?: boolean;
  memoTxt?: boolean;
}

const Forms = ({ memo, address }) => {
  const { t } = useTranslation();
  const [memoTxt, copyMemo] = useCopyToClipboard();

  return (
    <>
      <Form action="" method={"POST"}>
        <Coin labelTitle={t("Coin")}>
          <div className={"relative"}>
            <input className="ltr:pl-10 rtl:pr-10 w-full border py-2 outline-none" placeholder={t('Search_Coin_Name')} type={"search"} />
            <BiSearch
              className={`text-Gray absolute text-lg top-3 ${t("direction") === "rtl" ? "right-3" : "left-3"
                }`}
            />
          </div>
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className={"flex space-y-5 items-center cursor-pointer"}>
              <img className={"h7 w-7 block mt-4 ltr:mr-2 rtl:ml-2"} src={btc} alt="" />
              <div className="text-darkMode">
                <label>Btc</label>
                <span className="block">Bitcoin</span>
              </div>
            </div>
          ))}
        </Coin>
        <Coin labelTitle={t("NetWork")} >
          <h4 className="dark:text-gray-50">{t('Select_Network')}</h4>
          <p className="my-3 text-sm leading-8 dark:text-darkMode">{t('Ensure_the_network')}</p>
          <ul className="mt-4 space-y-5 ">
            <li>
              <label className="text-black-black dark:text-darkMode" htmlFor="">BNB</label>
              <span className="text-textGray block">Binance Chain(BEP2)</span>
            </li>
            <li>
              <label className="text-black-black dark:text-darkMode" htmlFor="">BSC</label>
              <span className="text-textGray block">Binance Chain(BEP2)</span>
            </li>
            <li>
              <label className="text-black-black dark:text-darkMode" htmlFor="">ETH</label>
              <span className="text-textGray block">Ethereum (BRC20)</span>
            </li>
          </ul>

        </Coin>
        <FormControl className={"relative"}>
          <label className="text-darkMode" htmlFor="">{t("Address")}</label>
          <div className={"relative"}>
            <Code className="dark:text-darkMode">{address}</Code>
            <div
              className={`flex items-center absolute  top-3 space-x-2.5 ${t("direction") === "rtl" ? "left-0" : "right-0"
                }`}
            >
              <MdOutlineContentCopy
                onClick={() => copyMemo(address)}
                className={"cursor-pointer dark:text-darkMode"}
                style={
                  t("direction") === "rtl"
                    ? { marginLeft: 5 }
                    : { marginRight: 5 }
                }
              />
              <ImQrcode
                style={
                  t("direction") === "rtl"
                    ? { marginLeft: 5 }
                    : { marginRight: 7 }
                }
                className={"cursor-pointer group mr-2 dark:text-darkMode"}
              />
              {memoTxt && (
                <span
                  className={
                    "absolute bg-primary-light text-black whitespace-nowrap rounded-md px-2 py-1  text-xs bottom-8"
                  }
                >
                  {t("Copied")}
                </span>
              )}
            </div>
          </div>
        </FormControl>
        <FormControl>
          <div>
            <label htmlFor="">Memo</label>
            <Memo className="dark:text-darkMode">
              <div className={"relative"}>
                <Input className={"border-0"} type="text" value={memo} />
                <div
                  className={`flex items-center absolute top-3 space-x-2.5 ${t("direction") === "rtl" ? "left-0" : "right-0"
                    } `}
                >
                  <MdOutlineContentCopy
                    onClick={() => copyMemo(memo)}
                    className={"cursor-pointer "}
                    style={
                      t("direction") === "rtl"
                        ? { marginLeft: 7 }
                        : { marginRight: 7 }
                    }
                  />
                  <ImQrcode
                    style={
                      t("direction") === "rtl"
                        ? { marginLeft: 7 }
                        : { marginRight: 7 }
                    }
                    className={"cursor-pointer"}
                  />
                  {memoTxt && (
                    <span
                      className={
                        "absolute bg-primary-light text-black whitespace-nowrap rounded-md px-2 py-1  text-xs bottom-8"
                      }
                    >
                      {t("Copied")}
                    </span>
                  )}
                </div>
              </div>
              <span className={"text-Link text-xs py-1 text-center"}>
                {t("Memo_is_Required")}
              </span>
            </Memo>
          </div>
        </FormControl>
        <div className={"mt-6 space-y-4 "}>
          <div
            className={
              "flex items-center justify-between text-Gray text-sm md:text-base dark:text-darkMode"
            }
          >
            <label>Expected Arrival</label>
            <label>Expected unlock</label>
          </div>
          <div
            className={"flex items-center justify-between text-sm md:text-base"}
          >
            <span className={"text-black"}>
              1
              <span className={"text-Gray ltr:ml-1 font-thin rtl:ml-1"}>
                NetWork Confirmation
              </span>
            </span>
            <span>
              1
              <span className={"text-Gray ltr:ml-1 font-thin rtl:ml-1"}>
                NetWork Confirmation
              </span>
            </span>
          </div>
        </div>
        <div className={"mt-2 text-sm  md:text-base"}>
          <label className={"text-Gray mb-2 block"}>Minimume Deposit</label>
          <span className="text-darkMode">0.000000001 </span>
        </div>
        <div className={"mt-3 mx-2"}>
          <ul className={"list-disc text-sm space-y-2 md:text-base dark:text-darkMode"}>
            <li>Send only Bnb to this deposit Address</li>
            <li>
              Ensure the NetWork is{" "}
              <span className={"text-red-400"}>Binance Coin(BEP2)</span>
            </li>
          </ul>
        </div>
      </Form>
    </>
  );
};

export default Forms;
