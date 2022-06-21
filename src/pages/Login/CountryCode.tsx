import Dialog from "components/Modal";
import * as React from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { Input } from "./Styled.Login";
import { AiOutlineSearch } from "react-icons/ai";
import { useTranslation } from "react-i18next";
const CountryCode = () => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const { t } = useTranslation();
  //test
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
            <Input type="search" />
            <AiOutlineSearch
              className={`absolute ${
                t("direction") === "rtl" ? "left-5  mr-5" : "ml-5 right-5"
              }  text-xl text-textGray  top-3`}
            />
          </div>
        </Dialog>
        <IoMdArrowDropdown
          className={`absolute top-3 ${
            t("direction") === "rtl" ? "left-8 " : "right-8"
          } `}
        />
      </div>
    </>
  );
};

export default CountryCode;
