import {Footer, Header} from "../components";
import {AppContext} from "context/AppContext";
import React, {useContext} from "react";
import {useTranslation} from "react-i18next";
import GlobalStyle from "styles/globalStyles";
import styled from "styled-components";

const Layout = ({children}) => {
    const {isDark, setIsDark} = useContext(AppContext);
    const {t} = useTranslation();
    let dir = t("direction") === "rtl" ? "rtl" : "ltr";

    return (
        <div dir={dir} className={isDark ? "dark" : "light"}>
            <GlobalStyle/>
            <div className={isDark ? "bg-DarkBody h-full" : "bg-white h-full"}>
                <Header/>
                <Main>{children}</Main>
                <Footer/>
            </div>
        </div>
    );
};

export default Layout;


const Main = styled.div`
  min-height: calc(100vh - 70px);
  width: 100%;

`