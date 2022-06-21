import React from "react";
import { useCallback } from "react";

type DetectDevicesTypes = {
  isMobile?: boolean;
  isTablet?: boolean;
  isDesktop?: boolean;
};

const useDetectMobile = () => {
  const [state, setState] = React.useState<DetectDevicesTypes>({
    isMobile: false, // 576
    isTablet: false, // >576 < 980
    isDesktop: true, // > 980
  });

  const handleDetectDevices = useCallback(() => {
    if (window.innerWidth < 577) setState({ isMobile: true });
    if (window.innerWidth > 576 && window.innerWidth < 981)
      setState({ isTablet: true });
    if (window.innerWidth > 980) setState({ isDesktop: true });
  }, []);
  React.useEffect(() => {
    // it will rendered for the first time.
    handleDetectDevices();
    window.addEventListener("resize", () => {
      handleDetectDevices();
    });
    return () => {
      window.addEventListener("resize", (e) => {});
    };
  }, []);
  return state;
};

export default useDetectMobile;
