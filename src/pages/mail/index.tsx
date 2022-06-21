import React from "react";
import {
  ColLeft,
  ColRight,
  Gird,
  NotificationContainer,
} from "./Notifications";
import HeaderMail from "./HeaderMail";
import MainMail from "./MainMail";
import NavMail from "./NavMail";
import { Marginer } from "components/marginer/indxe";

export const InMail = () => {
  const [tabs, setTabs] = React.useState(0);

  return (
    <NotificationContainer>
      <Marginer direction="vertical" margin="4em" />
      <HeaderMail />
      <Gird>
        <ColLeft>
          <NavMail tabs={tabs} setTabs={setTabs} />
        </ColLeft>
        <ColRight>
          <MainMail tabs={tabs} setTabs={setTabs} />
        </ColRight>
      </Gird>
    </NotificationContainer>
  );
};
