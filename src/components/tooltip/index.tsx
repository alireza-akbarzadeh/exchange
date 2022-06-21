import React from "react";
import { TooltipHead, TooltipBody, Arrow } from "./Tooltip";
interface ITooltipProps {
  className: string;
  title: string;
  displyTitle: string;
  icon: any;
}
export const Tooltip = ({
  className,
  displyTitle,
  title,
  icon = <></>,
}: Partial<ITooltipProps>) => {
  const DynamicIcon = () => icon;
  return (
    <>
      <TooltipHead className="group">
        {title}
        {icon && <DynamicIcon />}
        <TooltipBody className="">
          <span
            className={`relative z-10 p-2 text-xs leading-none whitespace-no-wrap transition-all ease-in-out duration-300 rounded-md text-white sm  shadow-lg ${className}`}
          >
            {displyTitle}
          </span>
          <Arrow />
        </TooltipBody>
      </TooltipHead>
    </>
  );
};
