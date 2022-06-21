import { memo, useContext, useState } from "react";
import { VscSettingsGear } from "react-icons/vsc";
import { CgMenuGridR } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import { GrSun } from "react-icons/gr";
import { HiOutlineMoon } from "react-icons/hi";
import {
  List,
  ListItems,
  Menu,
  SubMenu,
  Button,
  MenuContent,
  SubSetting,
  Setting,
} from "./styled.Header";
import Logo from "../../assets/logo.svg";
import MenuItem from "./MenuItems";
import { useTranslation } from "react-i18next";
import QR from "../../assets/images/qr-code.png";
import { GiGreekTemple } from "react-icons/gi";
import { BsCreditCard } from "react-icons/bs";
import { SiCashapp } from "react-icons/si";
import { GiArchiveResearch } from "react-icons/gi";
import { useHistory } from "react-router-dom";
import LanUSDDialog from "./LanUSDDialog";
import { AppContext } from "context/AppContext";

const DefaultMenu = ({ className }) => {
  const [isActiveTheme, setIsActiveTheme] = useState<number>(0);
  const [isActiveLayout, setIsActiveLayout] = useState<number>(0);
  const [isActiveTab, setIsActiveTab] = useState<number>(0);
  const { setIsDark } = useContext(AppContext);
  const { t } = useTranslation();
  const history = useHistory();
  const hadleLightTheme = () => {
    setIsActiveTheme(0);
    setIsDark(false);
  };
  const hadleDarkTheme = () => {
    setIsActiveTheme(1);
    setIsDark(true);
  };
  return (
    <>
      <div className={className}>
        <div className="flex items-center justify-between">
          <div>
            <List>
              <ListItems>
                <img src={Logo} className="h-11" alt="" />
              </ListItems>
              <ListItems className="group dropdown">
                <Menu>
                  <CgMenuGridR className="text-gray-100 text-3xl  group-hover:text-primary-light transition-all duration-300 ease-in-out" />
                  <IoMdArrowDropdown className="text-gray-500  group-hover:text-primary-light group-hover:-rotate-180  transform text-lg transition-all duration-300 ease-in-out " />
                </Menu>
                <SubMenu className="dropdown-menu">
                  <MenuContent className="w-full  space-y-6 flex items-center ">
                    <div className="">
                      <MenuItem
                        title={t("Exchange")}
                        icon={<GiGreekTemple />}
                        subTitle={t("Blockchain_and_crypto_asset_exchange")}
                      />
                      <MenuItem
                        title={t("Institutional_Services")}
                        icon={<BsCreditCard />}
                        subTitle={t("Institutional_and_VIP_Trading_Solutions")}
                      />

                      <MenuItem
                        icon={<SiCashapp />}
                        title={t("Dex")}
                        subTitle={t(
                          "Fast_and_secure_decentralized_digital_asset_exchange"
                        )}
                      />

                      <MenuItem
                        icon={<GiArchiveResearch />}
                        title={t("Research")}
                        subTitle={t("Institutional_grade_analysis_and_reports")}
                      />
                    </div>
                    <div className="rtl:mr-15 ltr:ml-15">
                      <MenuItem
                        title={t("Exchange")}
                        icon={<GiGreekTemple />}
                        subTitle={t("Blockchain_and_crypto_asset_exchange")}
                      />
                      <MenuItem
                        title={t("Institutional_Services")}
                        icon={<BsCreditCard />}
                        subTitle={t("Institutional_and_VIP_Trading_Solutions")}
                      />

                      <MenuItem
                        icon={<SiCashapp />}
                        title={t("Dex")}
                        subTitle={t(
                          "Fast_and_secure_decentralized_digital_asset_exchange"
                        )}
                      />

                      <MenuItem
                        icon={<GiArchiveResearch />}
                        title={t("Research")}
                        subTitle={t("Institutional_grade_analysis_and_reports")}
                      />
                    </div>
                    <div className="rtl:mr-15 ltr:ml-15">
                      <MenuItem
                        title={t("Exchange")}
                        icon={<GiGreekTemple />}
                        subTitle={t("Blockchain_and_crypto_asset_exchange")}
                      />
                      <MenuItem
                        title={t("Institutional_Services")}
                        icon={<BsCreditCard />}
                        subTitle={t("Institutional_and_VIP_Trading_Solutions")}
                      />

                      <MenuItem
                        icon={<SiCashapp />}
                        title={t("Dex")}
                        subTitle={t(
                          "Fast_and_secure_decentralized_digital_asset_exchange"
                        )}
                      />

                      <MenuItem
                        icon={<GiArchiveResearch />}
                        title={t("Research")}
                        subTitle={t("Institutional_grade_analysis_and_reports")}
                      />
                    </div>
                  </MenuContent>
                </SubMenu>
              </ListItems>
              <ListItems className="group">
                <Menu>
                  <span className="group-hover:text-primary-light ">
                   {t('Buy_Crypto')}
                    <span className="bg-primary-light  py-1 px-2 text-xs ltr:ml-2 rtl:mr-2 rounded-md text-black">
                      ERU
                    </span>
                  </span>
                  <IoMdArrowDropdown className="text-gray-500 group-hover:text-primary-light group-hover:-rotate-180  transform text-lg transition-all duration-300 ease-in-out" />
                </Menu>
                <SubMenu className="dropdown-menu">
                  <MenuContent className="w-96 max-w-full space-y-6 ">
                    <MenuItem
                      title={t("Exchange")}
                      icon={<GiGreekTemple />}
                      subTitle={t("Blockchain_and_crypto_asset_exchange")}
                    />
                    <MenuItem
                      title={t("Institutional_Services")}
                      icon={<BsCreditCard />}
                      subTitle={t("Institutional_and_VIP_Trading_Solutions")}
                    />

                    <MenuItem
                      icon={<SiCashapp />}
                      title={t("Dex")}
                      subTitle={t(
                        "Fast_and_secure_decentralized_digital_asset_exchange"
                      )}
                    />

                    <MenuItem
                      icon={<GiArchiveResearch />}
                      title={t("Research")}
                      subTitle={t("Institutional_grade_analysis_and_reports")}
                    />
                  </MenuContent>
                </SubMenu>
              </ListItems>
              <ListItems className="group">
                <Menu>
                  <span className="group-hover:text-primary-light ">
                    {t("Trade")}
                  </span>
                  <IoMdArrowDropdown className="text-gray-500  group-hover:text-primary-light group-hover:-rotate-180  transform text-lg transition-all duration-300 ease-in-out" />
                </Menu>
                <SubMenu className="dropdown-menu">
                  <MenuContent className="w-96 max-w-full space-y-6 ">
                    <MenuItem
                      title={t("Exchange")}
                      icon={<GiGreekTemple />}
                      subTitle={t("Blockchain_and_crypto_asset_exchange")}
                    />
                    <MenuItem
                      title={t("Institutional_Services")}
                      icon={<BsCreditCard />}
                      subTitle={t("Institutional_and_VIP_Trading_Solutions")}
                    />

                    <MenuItem
                      icon={<SiCashapp />}
                      title={t("Dex")}
                      subTitle={t(
                        "Fast_and_secure_decentralized_digital_asset_exchange"
                      )}
                    />

                    <MenuItem
                      icon={<GiArchiveResearch />}
                      title={t("Research")}
                      subTitle={t("Institutional_grade_analysis_and_reports")}
                    />
                  </MenuContent>
                </SubMenu>
              </ListItems>
              <ListItems className="group">
                <Menu>
                  <span className="group-hover:text-primary-light ">
                    {t("Derivatives")}
                  </span>
                  <IoMdArrowDropdown className="text-gray-500  group-hover:text-primary-light group-hover:-rotate-180  transform text-lg transition-all duration-300 ease-in-out" />
                </Menu>
                <SubMenu className="dropdown-menu">
                  <MenuContent className="w-96 max-w-full space-y-6 ">
                    <MenuItem
                      title={t("Exchange")}
                      icon={<GiGreekTemple />}
                      subTitle={t("Blockchain_and_crypto_asset_exchange")}
                    />
                    <MenuItem
                      title={t("Institutional_Services")}
                      icon={<BsCreditCard />}
                      subTitle={t("Institutional_and_VIP_Trading_Solutions")}
                    />

                    <MenuItem
                      icon={<SiCashapp />}
                      title={t("Dex")}
                      subTitle={t(
                        "Fast_and_secure_decentralized_digital_asset_exchange"
                      )}
                    />

                    <MenuItem
                      icon={<GiArchiveResearch />}
                      title={t("Research")}
                      subTitle={t("Institutional_grade_analysis_and_reports")}
                    />
                  </MenuContent>
                </SubMenu>
              </ListItems>
            </List>
          </div>
          <div>
            <List>
              <ListItems
                onClick={() => history.push("/login")}
                className="group"
              >
                <span className="group-hover:text-primary-light ">
                  {t("Login")}
                </span>
              </ListItems>
              <ListItems className="group">
                <Button className="btn-primary hover:bg-red-400">
                  {t("Sing_in")}
                </Button>
              </ListItems>
              <ListItems className="group">
                <Menu>
                  <span className="group-hover:text-primary-light ">
                    {t("Download")}
                  </span>
                </Menu>
                <SubMenu className="dropdown-menu">
                  <MenuContent className="w-52 max-w-full space-y-6 ">
                    <img src={QR} alt="" />
                    <p className="leading-loose">{t("Scan")}</p>
                    <button className="btn-primary whitespace-nowrap max-w-full text-xs text-black px-4 py-2 rounded-md">
                      {t("More_Download_options")}
                    </button>
                  </MenuContent>
                </SubMenu>
              </ListItems>
              <LanUSDDialog t={t} />
              <ListItems className="group">
                <Menu>
                  <span className="group-hover:text-primary-light ">
                    <VscSettingsGear />
                  </span>
                </Menu>
                <SubSetting className="dropdown-menu">
                  <Setting className="">
                    <div className="flex items-center justify-between  border-b border-gray-600 pb-2">
                      <h4 className="text-textGray">Theme</h4>
                      <div className="flex items-center justify-between border border-gray-700 bg-gray-600 w-20 h-8 p-1  rounded-md">
                        <div
                          className={`${
                            isActiveTheme === 0 && "bg-DarkBody  rounded-md"
                          } py-1 px-2`}
                          onClick={() => hadleLightTheme()}
                        >
                          <GrSun className="pb-1 text-white rounded-sm text-xl" />
                        </div>
                        <div
                          className={`${
                            isActiveTheme === 1 && "bg-DarkBody   rounded-md"
                          } py-1 px-2 `}
                          onClick={() => hadleDarkTheme()}
                        >
                          <HiOutlineMoon className=" text-black  text-lg " />
                        </div>
                      </div>
                    </div>
                    <div className=" border-b border-gray-600  py-4">
                      <h4
                        className={
                          t("direction") === "rtl"
                            ? "text-right text-textGray"
                            : "text-left text-textGray"
                        }
                      >
                        Color Setting
                      </h4>
                      <ul className="mt-3">
                        <li className="flex items-center justify-between">
                          <div>
                            <label className="inline-flex" htmlFor="Trdintonla">
                              <input
                                type="radio"
                                id="Trdintonla"
                                name="radio"
                                value="1"
                                className=" ltr:mr-2 rtl:ml-2  focus:ring-primary-dark  focus:bg-primary-dark"
                              />
                              <span>Trdintonla</span>
                            </label>
                          </div>
                          <div className="flex ">
                            <span className="w-4 h-3 ltr:mr-2 rtl:ml-2 bg-DarkGreen block"></span>
                            <span className="w-4 h-3 bg-DarkRed block"></span>
                          </div>
                        </li>
                        <li className="flex items-center justify-between mt-2">
                          <div>
                            <label className="inline-flex" htmlFor="Fresh">
                              <input
                                type="radio"
                                value="2"
                                name="radio"
                                id="Fresh"
                                className="border ring-primary-dark  rounded-full focus:ring-primary-dark  focus:bg-primary-dark   ltr:mr-2 rtl:ml-2"
                              />
                              <span className="">Fresh</span>
                            </label>
                          </div>
                          <div className="flex ">
                            <span className="w-4 h-3  ltr:mr-2 bg-LightPink block"></span>
                            <span className="w-4 h-3 rtl:ml-2 bg-LightGreen block"></span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className=" border-b border-gray-600  py-4">
                      <h4
                        className={
                          t("direction") === "rtl"
                            ? "text-right text-textGray"
                            : "text-left text-textGray"
                        }
                      >
                        Layout
                      </h4>
                      <div className="flex justify-between items-center mt-2">
                        <label htmlFor="" className="inline-flex group">
                          <input
                            className="ltr:mr-2 rtl:ml-2 "
                            value="1"
                            name="radio"
                            type="radio"
                          />
                          <span>Order Mode</span>
                        </label>
                        <label htmlFor="" className="inline-flex">
                          <input
                            className="ltr:mr-2 rtl:ml-2"
                            value="2"
                            name="radio"
                            type="radio"
                          />
                          <span>Multi Chart</span>
                        </label>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mt-4 py-4">
                        <div
                          className={` h-16 ${
                            isActiveLayout === 0 &&
                            "border-2 border-primary-light"
                          }  col-span-1`}
                          onClick={() => setIsActiveLayout(0)}
                        >
                          <div className="border-8 border-textGray h-full w-full "></div>
                          <span className="mt-2 block">classic</span>
                        </div>
                        <div
                          className={` h-16 ${
                            isActiveLayout === 1 &&
                            "border-primary-light border-2"
                          }  col-span-1`}
                          onClick={() => setIsActiveLayout(1)}
                        >
                          <div className="border-8 border-textGray h-full w-full "></div>
                          <span className="mt-2 block">Pro</span>
                        </div>
                        <div
                          className={` h-16 ${
                            isActiveLayout === 2 &&
                            "border-primary-light border-2"
                          }  col-span-1`}
                          onClick={() => setIsActiveLayout(2)}
                        >
                          <div className="border-8 border-textGray h-full w-full "></div>
                          <span className="mt-2 block">full Screen</span>
                        </div>
                      </div>
                    </div>
                  </Setting>
                </SubSetting>
              </ListItems>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(DefaultMenu);
