import React from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import {
  Inner,
  AccordionBody,
  AccordionContent,
  AccordionHeader,
  WrapperIcon,
} from "./Accourdion";
interface IAccourdionProps {
  children: React.ReactNode;
  btnClass: string;
  btnTitle: string;
  active: boolean;
  icon?: any;
  haseIcon?: boolean;
}
const Accourdion = ({
  active,
  children,
  btnClass,
  btnTitle,
  haseIcon,
  icon = <></>,
}: Partial<IAccourdionProps>) => {
  const [showAccordion, setShowAccordion] = React.useState(false);
  const DynamicIcon = () => icon;
  return (
    <>
      <Inner>
        <AccordionHeader>
          <WrapperIcon>
            <DynamicIcon />
            <button
              className={`${btnClass}`}
              type="button"
              onClick={() => setShowAccordion(true)}
            >
              {btnTitle}
            </button>
          </WrapperIcon>
          {haseIcon && (
            <div onClick={() => setShowAccordion(!showAccordion)}>
              {showAccordion ? (
                <IoMdArrowDropup
                  className={showAccordion && "text-primary-light"}
                />
              ) : (
                <IoMdArrowDropdown />
              )}
            </div>
          )}
        </AccordionHeader>
        {showAccordion ? (
          <AccordionContent>
            <AccordionBody>{children}</AccordionBody>
          </AccordionContent>
        ) : null}
      </Inner>
    </>
  );
};

export default Accourdion;
