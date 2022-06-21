import Dialog from "components/Modal";
import * as React from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { Input } from "./Styled.Register";
import { AiOutlineSearch } from "react-icons/ai";
import { useTranslation } from "react-i18next";
const CountryCode = () => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const { t } = useTranslation();
  return (
    <>
      <div className="relative flex-1">
        <Dialog
          haveAnimate={true}
          showModal={showModal}
          ModalClass="w-full max-w-sm"
          ModalContetntClass="dark:bg-settingHover bg-white"
          btnClass="ltr:mr-5 rtl:ml-5 border-2 hover:border-primary-light h-full w-28 bg-transparent px-4 outline-none"
          setShowModal={setShowModal}
          title="Select Area Code"
        >
          <div className="relative">
            <Input type="search" className="dark:text-white" />
            <AiOutlineSearch
              className={`absolute rtl:right-5 ${
                t("direction") === "rtl" ? "left-5 ml-2 " : "right-5 mr-2"
              }text-xl text-textGray  top-3`}
            />
          </div>
        </Dialog>
        <IoMdArrowDropdown
          className={`absolute top-3 dark:text-white ${
            t("direction") === "rtl" ? "left-0 ml-7" : "right-0 mr-7"
          }`}
        />
      </div>
    </>
  );
};

export default CountryCode;
