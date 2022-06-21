import React from "react";
import { Container, Step } from "./Stepper-styled";

interface IStepProps {
  step2: boolean;
  step3: boolean;
  step4: boolean;
  step1: boolean;
  step5: boolean;
  children: React.ReactNode;
}

const Stepper = ({
  step1,
  step2,
  step3,
  step4,
  step5,
  children,
}: Partial<IStepProps>) => {
  return (
    <>
      <Container>
        <Step active={step1}>
          <span>1</span>
        </Step>
        <Step active={step2}>
          <span>2</span>
        </Step>
        <Step active={step3}>
          <span>3</span>
        </Step>
        <Step active={step4}>
          <span>4</span>
        </Step>
        <Step active={step5}>
          <span>5</span>
        </Step>
      </Container>
    </>
  );
};

export default Stepper;
