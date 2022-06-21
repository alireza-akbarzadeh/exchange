import React from "react";
import useDetectMobile from "Hook/useDetectMobile";
import DefaultMenu from "./DefaultMenu";
import MobileMenu from "./MobileMenu";
import { memo } from "react";

const Header: React.FC = () => {
  const { isDesktop } = useDetectMobile();

  return (
    <div className="text-center bg-Header px-6 py-3">
      {isDesktop ? (
        <DefaultMenu className={""} />
      ) : (
        <MobileMenu className={""} />
      )}
    </div>
  );
};
export default memo(Header);
