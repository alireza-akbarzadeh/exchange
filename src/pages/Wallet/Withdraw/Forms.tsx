import { FormControl, Form, Input, Button } from "./withdraw";
import { useTranslation } from "react-i18next";
import Coin from "./Coin";
import btc from "../../../assets/Coins/btc.svg";
import { BiSearch } from "react-icons/all";
import MemoCode from "./Memo";
import { useState } from "react";
import NewAddressBook from "./NewAddressBook";
import SelectNetwork from "./SelectNetwork";
import { AiOutlineExclamationCircle } from "react-icons/ai"
interface ICopiedData {

  MemoCode
  addressTxt?: boolean;
  memoTxt?: boolean;
}

const Forms = ({ memo, address }) => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Form action="" onSubmit={(e) => e.preventDefault()}>
        <Coin labelTitle={t("Coin")}>
          <div className={"relative"}>
            <input className="ltr:pl-10 rtl:pr-10 w-full border py-2 outline-none" placeholder={t('Search_Coin_Name')} type={"search"} />
            <BiSearch
              className={`text-Gray absolute text-lg top-3 ${t("direction") === "rtl" ? "right-3" : "left-3"
                }`}
            />
          </div>
          {[1, 2, 3].map((item) => (
            <div key={item} className={"flex space-y-5 items-center cursor-pointer"}>
              <img className={"h7 w-7 block mt-4 ltr:mr-2 rtl:ml-2"} src={btc} alt="" />
              <div className="dark:text-darkMode">
                <label>Btc</label>
                <span className="block">Bitcoin</span>
              </div>
            </div>
          ))}
        </Coin>
        <FormControl className="space-x-2 my-4">
          <NewAddressBook setShowModal={setShowModal} showModal={showModal} />
          <Button className="dark:text-darkMode">
            {t('Address_Book')}
          </Button>
        </FormControl>
        <FormControl className={"relative"}>
          <label className="dark:text-darkMode" htmlFor="">{t("Address")}</label>
          <Input />
        </FormControl>
        <SelectNetwork />
        <FormControl >
          <div className="flex flex-wrap justify-between items-start md:items-center dark:text-darkMode ">
            <label htmlFor="">{t("Amount")}</label>
            <div className="flex items-center">
              <span className="mx-2 my-2 md:my-0">0.000147465 BNB <span className="text-textGray ">{t('available')}</span></span>
              <AiOutlineExclamationCircle />
            </div>
          </div>
          <div className="relative">
            <Input className="" value="minimal 0.01" />
            <div className={`flex ltr:divide-x space-x-2 absolute items-center  top-0 ${t("direction") === "rtl" ? "left-5" : "right-5"}`}>
              <span className="text-Link cursor-pointer rtl:pl-2">{t('Max')}</span>
              <span className="ltr:pl-2 rtl:border-r ltr:border-l  rtl:pr-2 dark:text-darkMode mt-2">BNB</span>
            </div>
          </div>
        </FormControl>
      </Form>
    </>
  );
};

export default Forms;
