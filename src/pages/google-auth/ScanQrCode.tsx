import { Button, Title } from "./google-auth.style";
import { Stepper } from "../../components";
import { FaApple, FaGooglePlay, IoDocumentTextOutline } from "react-icons/all";
import { useTranslation } from "react-i18next";
import QR from "../../assets/images/qr-code.png";
interface IStepProps {
  setStep: (index: number) => void;
}

const ScanQrCode = ({ setStep }: IStepProps) => {
  const { t } = useTranslation();
  return (
    <>
      <h4>{t("Setting")}</h4>
      <Title xl>{t("Enable_Google")}</Title>
      <Stepper step1 step2 />
      <div className={"max-w-lg w-full mx-auto mt-20"}>
        <Title md className={"break-all"}>
          {t("Scan_THis_Qr")}
        </Title>
        <div className={"flex justify-between my-20"}>
          <div className={"flex justify-center w-full"}>
            <img className={"w-32 h-32"} src={QR} alt="" />
          </div>
        </div>
        <div className={"flex items-center justify-center flex-col "}>
          <span className={"uppercase text-semibold block"}>
            dsdfopewuikjfsd7s
          </span>
          <p className={"text-textGray text-center mt-5"}>
            {t("Unable_to_scan_the_QR_code")}
          </p>
        </div>
        <div className={"flex items-center space-x-3 "}>
          <Button onClick={() => setStep(0)}>{t("Previous")}</Button>
          <Button
            active
            className={"bg-transparent"}
            onClick={() => setStep(2)}
          >
            {t("Next")}
          </Button>
        </div>
      </div>
    </>
  );
};

export default ScanQrCode;
