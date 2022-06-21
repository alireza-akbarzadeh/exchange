import { Button, Title } from "./google-auth.style";
import { Stepper } from "../../components";
import { FaApple, FaGooglePlay, IoDocumentTextOutline } from "react-icons/all";
import { useTranslation } from "react-i18next";

const AuthEnabled = () => {
  const { t } = useTranslation();
  return (
    <>
      <h4>{t("Setting")}</h4>
      <Title xl>AuthEnabled</Title>
      <Stepper step1 step2 step3 step4 step5 />
      <div className={"max-w-lg w-full mx-auto mt-20"}>
        <Title md className={"break-all"}>
          {t("Download_Auth_Google")}
        </Title>
        <div className={"flex justify-between my-20"}>
          <div className={"text-center space-y-1"}>
            <FaApple className={"w-8 h-8 block mx-auto className mb-3"} />
            <span className={"mt-3 text-textGray"}>{t("Download_From")}</span>
            <p>{t("App_Store")}</p>
          </div>
          <div className={"text-center space-y-1"}>
            <FaGooglePlay className={"w-8 h-8 block mx-auto className mb-3"} />
            <span className={"mt-3 text-textGray"}>{t("Download_From")}</span>
            <p>{t("App_Google")}</p>
          </div>
        </div>
        <div
          className={
            "flex items-center justify-center text-lg mt-5 md:text-2xl mt-10 space-x-1.5"
          }
        >
          <IoDocumentTextOutline />
          <span className={"text-underline text-textGray"}>
            {t("How_Tow_Setup_Google_Aut")}
          </span>
        </div>
        <Button active>Back to Security</Button>
      </div>
    </>
  );
};

export default AuthEnabled;
