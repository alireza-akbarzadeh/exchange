import React from "react";
interface IDeviderProps {
  className?: string;
}
export const Devider = ({ className }: IDeviderProps) => {
  return <span className={`${className} border my-2 w-full block`} />;
};
