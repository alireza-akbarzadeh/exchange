import React, { useState } from "react";
import { Row, ColLeft, ColRight, Main, SideBar, Container } from "./Wallet";
import Nav from "./Nav";

const Layout = ({ children }) => {
  const [tabs, setTabs] = useState<number>(0);
  return (
    <Row>
      <ColLeft>
        <SideBar>
          <Nav tabs={tabs} setTabs={setTabs} />
        </SideBar>
      </ColLeft>
      <ColRight>
        <Main>
          <Container>{children}</Container>
        </Main>
      </ColRight>
    </Row>
  );
};

export default Layout;
