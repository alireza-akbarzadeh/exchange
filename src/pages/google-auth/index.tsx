import { useState } from "react";
import AuthApp from "./Auth-app";
import AuthEnabled from "./AuthEnabled";
import VerifyAccount from "./VerifyAccount";
import ScanQrCode from "./ScanQrCode";
import SaveBackup from "./SaveBackup";
import { Container, Title } from "./google-auth.style";
const GoogleAuth = () => {
  const [step, setStep] = useState(0);
  console.log(step, "this is test");
  return (
    <Container>
      {step === 0 && <AuthApp setStep={setStep} />}
      {step === 1 && <ScanQrCode setStep={setStep} />}
      {step === 2 && <SaveBackup setStep={setStep} />}
      {step === 3 && <VerifyAccount setStep={setStep} />}
      {step === 4 && <AuthEnabled />}
    </Container>
  );
};

export default GoogleAuth;
