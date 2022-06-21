import * as React from "react";
import { ColLeft, ColRight, Row, Tab, FormContainer } from "./Styled.Login";
import { useTranslation } from "react-i18next";
import Email from "./Email";
import Mobile from "./Mobile";
import Qr from "../../assets/images/qr-code.png";
import { Link } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import { IoMdLock } from "react-icons/io";
export const Login = () => {
  const { t } = useTranslation();
  const [Tabs, setTabs] = React.useState(0);
  return (
    <div>
      <div className="flex items-center justify-center dark:bg-DarkNav bg-LightNav py-2">
        <IoMdLock className="text-green-400 text-lg ltr:mr-2 rtl:ml-2" />
        <p className="mt-1 dark:text-white fomt-medium text-xs text-black tracking-wider">
          {t("Url_verfication")}
          <span className="text-green-400 ltr:ml-2 rtl:ml-2">https://</span>
          <span className="ltr:ml-1 rtl:mr-2">account.digi.com</span>
        </p>
      </div>
      <Row className="max-w-2xl mx-auto items-center px-4 md:px-1">
        <ColRight className="relative">
          <div className="dark:text-gray-50 absolute  top-24">
            <h3 className="font-semibold text-lg md:text-3xl mb-2">
              {t("Account_Login")}
            </h3>
            <span className="text-sm md:text-base mb-4  font-medium ">
              {t("Welcome_back")}
            </span>
          </div>
          <FormContainer>
            <div className="w-full mt-7 md:mt-1">
              <Tab>
                <button
                  className={`${
                    Tabs === 0 &&
                    "rtl:ml-8 ltr:mr-8 font-extrabold dark:bg-settingHover px-4 py-2 rounded-lg text-gray-50"
                  }rtl:ml-8 ltr:mr-8 px-4 py-2 text-gray-600 `}
                  onClick={() => setTabs(0)}
                >
                  {t("Email")}
                </button>
                <button
                  className={`${
                    Tabs === 1 &&
                    "rtl:ml-8 ltr:mr-8 dark:bg-settingHover px-4 py-2 rounded-lg text-gray-50"
                  }rtl:ml-8 ltr:mr-8 px-4 py-2 text-gray-600`}
                  onClick={() => setTabs(1)}
                >
                  {t("Mobile")}
                </button>
              </Tab>
              {Tabs === 0 && <Email />}
              {Tabs === 1 && <Mobile />}
              <Link
                className="block hover:text-secoundry-light text-Link mt-4"
                to="#"
              ></Link>
              <ForgotPassword />
              <Link
                className="block hover:text-secoundry-light text-Link"
                to="register"
              >
                {t("Register_Now")}
              </Link>
            </div>
          </FormContainer>
        </ColRight>
        <ColLeft>
          <div className="text-center ma-auto  hidden sm:block">
            <div className="flex  justify-center text-center mt-11">
              <img className="h-40" src={Qr} alt="" />
            </div>
            <p className="dark:text-white mt-8 text-base">
              {t("Login_With_Qr_Code")}
            </p>
            <p className="dark:text-gray-300  mt-4 whitespace-nowrap">
              {t("Scan_this_code_Whit_the")}
              <a className="dark:text-primary-light text-Link rtl:mr-2">
                {t("Mobile_App")}
              </a>
            </p>
            <span className="dark:text-gray-100 block whitespace-nowrap">
              {t("To_log_in_Instantly")}
            </span>
          </div>
        </ColLeft>
      </Row>
    </div>
  );
};
