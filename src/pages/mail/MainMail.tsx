import React from "react";
import Message from "./Message";
import Activites from "./Activites";
import TraedNotifacation from "./TraedNotifacation";
import SystemMessage from "./SystemMessage";
import News from "./News";
interface IMainMailProps {
  tabs: number;
  setTabs: (val: number) => void;
}
const MainMail = ({ tabs }: IMainMailProps) => {
  return (
    <div className="mt-5">
      {tabs === 0 ? (
        <>
          <Message isRead={true} />
          <Message isRead={false} />
          <Message isRead={true} />
        </>
      ) : null}

      {tabs === 1 ? <Activites /> : null}
      {tabs === 2 ? <TraedNotifacation /> : null}
      {tabs === 3 ? <News /> : null}
      {tabs === 4 ? <SystemMessage /> : null}
    </div>
  );
};

export default MainMail;
