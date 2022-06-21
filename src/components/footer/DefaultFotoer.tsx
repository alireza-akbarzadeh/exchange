import { useLocation } from "react-router";
import { ListItem, List, Title, CopyRight, SocialLink } from "./Footer";
import { useTranslation } from "react-i18next";
import { FiInstagram } from "react-icons/fi";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaTelegram } from "react-icons/all";
const DefaultFooter = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isDefaultFooter = location.pathname === "/";
  return isDefaultFooter ? (
    <div className="flex sticky bottom-0 justify-between px-4 items-center border-t dark:border-borderColor py-1 dark:bg-DarkBody bg-footerLight border-gray-200">
      <div className="text-textSuccess text-xs">اتصال پایدار</div>
      <div className="dark:text-gray-50 text-black  text-xs">دانلود</div>
    </div>
  ) : (
    <>
      <div
        className={
          "bg-Header w-full max-w-full p-10 pt-20 mt-5 hidden md:block"
        }
      >
        <div className={"max-w-7xl w-full mx-auto"}>
          <div className={"flex flex-wrap justify-between "}>
            <div>
              <Title>{t("AboutUS")}</Title>
              <List>
                <ListItem>{t("About")}</ListItem>
                <ListItem>{t("Careers")}</ListItem>
                <ListItem>{t("Business_Contacts")}</ListItem>
                <ListItem>{t("Community")}</ListItem>
                <ListItem>{t("Binance_Blog")}</ListItem>
                <ListItem>{t("Privacy")}</ListItem>
                <ListItem>{t("Announcements")}</ListItem>
                <ListItem>{t("Notices")}</ListItem>
              </List>
            </div>
            <div>
              <Title>{t("Products")}</Title>
              <List>
                <ListItem>{t("Exchange")}</ListItem>
                <ListItem>{t("Academy")}</ListItem>
                <ListItem>{t("card")}</ListItem>
                <ListItem>{t("labs")}</ListItem>
                <ListItem>{t("Research")}</ListItem>
                <ListItem>{t("Trust_wallet")}</ListItem>
                <ListItem>{t("Featured_market")}</ListItem>
                <ListItem>{t("Gift_Card")}</ListItem>
              </List>
            </div>
            <div>
              <Title>{t("Service")}</Title>
              <List>
                <ListItem>{t("Downloads")}</ListItem>
                <ListItem>{t("Desktop_Application")}</ListItem>
                <ListItem>{t("Buy_Crypto")}</ListItem>
                <ListItem>{t("Referral")}</ListItem>
                <ListItem>{t("Affiliate")}</ListItem>
                <ListItem>{t("OTC_Trading")}</ListItem>
                <ListItem>{t("Listing")}</ListItem>
                <ListItem>{t("Listing_Historical_Market_Data")}</ListItem>
                <ListItem>{t("P2P_Merchant_Application")}</ListItem>
              </List>
            </div>
            <div>
              <Title>{t("Support")}</Title>
              <List>
                <ListItem>{t("Give_Us_Feedback")}</ListItem>
                <ListItem>{t("Support_Center")}</ListItem>
                <ListItem>{t("Submit_request")}</ListItem>
                <ListItem>{t("API_Documentation")}</ListItem>
                <ListItem>{t("Fees")}</ListItem>
                <ListItem>{t("Trading_Rules")}</ListItem>
                <ListItem>{t("Binance_Verify")}</ListItem>
                <ListItem>{t("Law_Enforcement_Requests")}</ListItem>
                <ListItem>{t("Trading_Rules")}</ListItem>
              </List>
            </div>
            <div>
              <Title>{t("Learn")}</Title>
              <List>
                <ListItem>{t("Buy_BNB")}</ListItem>
                <ListItem>{t("Buy_BUSD")}</ListItem>
                <ListItem>{t("Buy_Bitcoin")}</ListItem>
                <ListItem>{t("API_Documentation")}</ListItem>
                <ListItem>{t("Buy_Ethereum")}</ListItem>
                <ListItem>{t("Buy_Litecoin")}</ListItem>
                <ListItem>{t("Buy_Ripple")}</ListItem>
                <ListItem>{t("Buy_Bitcoin_Cash")}</ListItem>
                <ListItem>{t("Buy_Dogecoin")}</ListItem>
                <ListItem>{t("Buy_DeFi")}</ListItem>
                <ListItem>{t("Buy_SHIB")}</ListItem>
                <ListItem>{t("Buy_Tradable_Altcoins")}</ListItem>
              </List>
            </div>
            <div>
              <Title>Community</Title>
              <SocialLink>
                <li className="rtl:ml-3 ">
                  <FiInstagram />
                </li>
                <li>
                  <FaTelegram />
                </li>
                <li>
                  <RiFacebookCircleFill />
                </li>
                <li>
                  <AiOutlineTwitter />
                </li>
              </SocialLink>
            </div>
          </div>
          <CopyRight className={""}>Digialpha_Agency © 2021</CopyRight>
        </div>
      </div>
      <span className="mt-12 block md:hidden" />
    </>
  );
};

export default DefaultFooter;
