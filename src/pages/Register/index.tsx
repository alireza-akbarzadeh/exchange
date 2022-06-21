import * as React from "react";
import { ColLeft, ColRight, Row, Tab, FormContainer } from "./Styled.Register";
import { useTranslation } from "react-i18next";
import Email from "./Email";
import Mobile from "./Mobile";
import Qr from "../../assets/images/qr-code.png";
import { Link } from "react-router-dom";
import { IoMdLock } from "react-icons/io";
export const Register = () => {
  const { t } = useTranslation();
  const [Tabs, setTabs] = React.useState(0);
  return (
    <div>
      <Row className="max-w-2xl mx-auto items-center px-4 md:px-1">
        <ColRight className="relative">
          <FormContainer>
            <div className="w-full">
              <div className="dark:text-gray-50 ">
                <h3 className="font-semibold text-lg md:text-3xl mb-3">
                  {t("Create_Account")}
                </h3>
                <span className=" text-xs md:text-base font-medium ">
                  {t("Register_with_your_email_or_mobile")}
                </span>
              </div>
              <Tab className="mt-10">
                <button
                  className={`${
                    Tabs === 0 &&
                    "rtl:ml-8 ltr:mr-8 dark:bg-settingHover font-extrabold text-black px-4 py-2 rounded-lg dark:text-gray-50"
                  }rtl:ml-8 ltr:mr-8 px-4 py-2 text-gray-600 `}
                  onClick={() => setTabs(0)}
                >
                  {t("Email")}
                </button>
                <button
                  className={`${
                    Tabs === 1 &&
                    "rtl:ml-8 ltr:mr-8 dark:bg-settingHover px-4 py-2 font-extrabold text-black rounded-lg dark:text-gray-50"
                  }rtl:ml-8 ltr:mr-8 px-4 py-2 text-gray-600`}
                  onClick={() => setTabs(1)}
                >
                  {t("Mobile")}
                </button>
              </Tab>
              {Tabs === 0 && <Email />}
              {Tabs === 1 && <Mobile />}
              <div className="flex mt-4">
                <span className="dark:text-gray-50">
                  {t("Already_registered")}
                </span>
                <Link
                  className="block hover:text-secoundry-light text-Link ltr:ml-2 rtl:mr-2 "
                  to="login"
                >
                  {t("Login")}
                </Link>
              </div>
            </div>
          </FormContainer>
        </ColRight>
      </Row>
    </div>
  );
};
