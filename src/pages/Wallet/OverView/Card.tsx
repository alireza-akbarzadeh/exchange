import React from "react";
import { Box, Button } from "./OverView";
import { useTranslation } from "react-i18next";

interface ICardProps {
  title: string;
  icon: any;
  desc: string;
  active?: string;
  inActive?: string;
}

const CardConteiner = ({
  title,
  desc,
  inActive,
  active,
  icon = <></>,
}: ICardProps) => {
  const DynumicIcon = () => icon;
  const { t } = useTranslation();
  return (
    <Box>
      <div className={"flex text-textGray items-center"}>
        <DynumicIcon />
        <h4>{title}</h4>
      </div>
      <p className={"text-xs leading-relaxed mt-4"}>{desc}</p>
      <div className={"flex items-center mt-4"}>
        <div className={"ltr:mr-3 rtl:ml-3 inline-flex items-center"}>
          <span
            className={
              "bg-red-300 block w-2 h-2 rounded-full ltr:mr-2 rtl:ml-2"
            }
          />
          <span className={"text-textGray text-sm"}>{t("InActive")}</span>
        </div>
        <Button>{t("Active")}</Button>
      </div>
    </Box>
  );
};

export default CardConteiner;
