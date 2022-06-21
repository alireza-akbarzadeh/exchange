import * as React from "react";
import { VscSettingsGear } from "react-icons/vsc";
import { HiOutlineMenu } from "react-icons/hi";
import { List, ListItems, Button, ButtonMobile } from "./styled.Header";
import Logo from "../../assets/logo.svg";
import { memo } from "react";
import { Drawer } from "../drawer";
import { FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Accourdion from "components/accourdion";
import { RiBitCoinLine } from "react-icons/ri";
import { SiMarketo } from "react-icons/si";
import { GiTrade } from "react-icons/gi";
import { BsFileEarmarkArrowUpFill } from "react-icons/bs";
import { FiGlobe } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoLogoUsd } from "react-icons/io";
import { Devider } from "../../components";
const MobileMenu = ({ className }) => {
  const { t } = useTranslation();
  const [showDrawer, setShowDrawer] = React.useState(false);
  return (
    <div className={className}>
      <div className="flex items-center justify-between">
        <div>
          <List>
            <ListItems>
              <img src={Logo} className="h-11" alt="" />
            </ListItems>
          </List>
        </div>
        <div>
          <List>
            <ListItems className="group">
              <Button className="btn-primary hover:bg-yellow-400">
                ثبت نام
              </Button>
            </ListItems>
            <ListItems>
              <Drawer
                showDrawer={showDrawer}
                setShowDrawer={setShowDrawer}
                left={true}
                icon={<HiOutlineMenu />}
                DrawerClass={"w-full h-full"}
              >
                <FaTimes
                  className="text-2xl float-right clear-right font-thin text-textGray mt-4"
                  onClick={() => setShowDrawer(false)}
                />
                {/* Mobile Head */}
                <div className="mb-2">
                  <ButtonMobile className="text-gray-50">
                    {t("Login")}
                  </ButtonMobile>
                  <ButtonMobile color="primary" className="text-black">
                    {t("Sing_in")}
                  </ButtonMobile>
                </div>
                {/* Mobile Content */}
                <div>
                  <div className="text-right leading-loose">
                    <Accourdion
                      haseIcon={true}
                      icon={<RiBitCoinLine />}
                      btnTitle={t("Buy_Crypto")}
                    >
                      <ul
                        className={
                          t("direction") === "rtl" ? "text-right" : "text-left"
                        }
                      >
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                      </ul>
                    </Accourdion>
                    <Accourdion
                      haseIcon={true}
                      icon={<SiMarketo />}
                      btnTitle={t("Markets")}
                    >
                      <ul
                        className={
                          t("direction") === "rtl" ? "text-right" : "text-left"
                        }
                      >
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                      </ul>
                    </Accourdion>
                    <Accourdion
                      haseIcon={true}
                      icon={<GiTrade />}
                      btnTitle={t("Trade")}
                    >
                      <ul
                        className={
                          t("direction") === "rtl" ? "text-right" : "text-left"
                        }
                      >
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                      </ul>
                    </Accourdion>
                    <Accourdion
                      haseIcon={true}
                      icon={<BsFileEarmarkArrowUpFill />}
                      btnTitle={t("Derivatives")}
                    >
                      <ul
                        className={
                          t("direction") === "rtl" ? "text-right" : "text-left"
                        }
                      >
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                      </ul>
                    </Accourdion>
                    <Devider className="border-borderColor" />
                    <Accourdion icon={<FiGlobe />} btnTitle={t("Lng")} />
                    <Accourdion
                      icon={<MdOutlineFileDownload />}
                      btnTitle={t("Download")}
                    />{" "}
                    <Accourdion icon={<IoLogoUsd />} btnTitle={t("Usd")} />
                  </div>
                </div>
              </Drawer>
            </ListItems>
            <ListItems className="">
              <VscSettingsGear className="hidden  md:block" />
            </ListItems>
          </List>
        </div>
      </div>
    </div>
  );
};

export default memo(MobileMenu);
