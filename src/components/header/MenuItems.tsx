import { memo } from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import tw from "twin.macro";
interface IPorps {
  title: string;
  subTitle: string;
  className?: string;
  icon?: any;
}

const WrapperIcon = styled.div`
  svg {
    ${tw`text-2xl mt-2 text-primary-light`}
  }
`;

const MenuItem = ({ title, subTitle, className, icon = <></> }: IPorps) => {
  const { t } = useTranslation();

  const DynamicIcon = () => icon;
  return (
    <li
      className={`hover:bg-HoverSuvMneu rounded-md px-4 py-3 hover:py-3 mt-2 hover:px-4 Arrow_Hover ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex">
          <WrapperIcon>
            <DynamicIcon />
          </WrapperIcon>
          <div
            className={`${
              t("direction") === "rtl" ? "text-right mr-4" : "text-left ml-4"
            }`}
          >
            <p className="text-gray-200 text-base">{title}</p>
            <span className="text-textGray text-xs">{subTitle}</span>
          </div>
        </div>
        <div className="Arrow_show ">
          {t("direction") === "rtl" ? (
            <HiArrowNarrowLeft className="text-primary-light text-2xl" />
          ) : (
            <HiArrowNarrowRight className="text-primary-light text-2xl ltr:ml-5" />
          )}
        </div>
      </div>
    </li>
  );
};

export default memo(MenuItem);
