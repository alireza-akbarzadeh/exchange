import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { VscLayersActive } from "react-icons/vsc";
import { ImNewspaper } from "react-icons/im";
import { SiGooglemessages } from "react-icons/si";
import { Tab, TabItem } from "./Notifications";
import { useTranslation } from "react-i18next";
interface INavMailProps {
  tabs: number;
  setTabs: (val: number) => void;
}
const NavMail = ({ tabs, setTabs }: INavMailProps) => {
  const { t } = useTranslation();
  return (
    <div>
      <Tab>
        <TabItem
          className={`${
            tabs === 0 && "bg-primary-light bg-opacity-25 text-primary-dark"
          } py-3 rounded-md px-2`}
          onClick={() => setTabs(0)}
        >
          <AiOutlineMenu />
          {t("All")}
        </TabItem>
        <TabItem
          className={`${
            tabs === 1 && "bg-primary-light bg-opacity-25 text-primary-dark"
          } py-3 rounded-md px-2`}
          onClick={() => setTabs(1)}
        >
          <VscLayersActive />
          {t("Activities")}
        </TabItem>
        <TabItem
          className={`${
            tabs === 2 && "bg-primary-light bg-opacity-25 text-primary-dark"
          } py-3 rounded-md px-2`}
          onClick={() => setTabs(2)}
        >
          <SiGooglemessages />
          {t("Trade_Notifications")}
        </TabItem>
        <TabItem
          className={`${
            tabs === 3 && "bg-primary-light bg-opacity-25 text-primary-dark"
          } py-3 rounded-md px-2`}
          onClick={() => setTabs(3)}
        >
          <ImNewspaper />
          {t("News")}
        </TabItem>
        <TabItem
          className={`${
            tabs === 4 && "bg-primary-light bg-opacity-25 text-primary-dark"
          } py-2 rounded-md px-2`}
          onClick={() => setTabs(4)}
        >
          <SiGooglemessages />
          {t("System_Messages")}
        </TabItem>
      </Tab>
    </div>
  );
};

export default NavMail;
