import * as React from "react";
import {
  Inner,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  WrapperIcon,
  Overllay,
} from "./Drawer";

interface IDrawerProps {
  children: React.ReactNode;
  title: string;
  titleClass: string;
  showDrawer: boolean;
  setShowDrawer: (value: boolean) => void;
  haveAnimate: boolean;
  right: boolean;
  left: boolean;
  btnClass: string;
  btnTitle: string;
  DrawerClass: string;
  DrawerContentClass: string;
  icon: any;
}

export const Drawer = ({
  children,
  title,
  titleClass,
  right,
  left,
  setShowDrawer,
  showDrawer,
  btnClass,
  btnTitle,
  DrawerClass,
  DrawerContentClass,
  icon = <></>,
}: Partial<IDrawerProps>) => {
  const handleCloseDrawer = () => setShowDrawer(false);

  const DynamicIcon = () => icon;
  return (
    <>
      <WrapperIcon
        className={`${btnClass}`}
        type="button"
        onClick={() => setShowDrawer(true)}
      >
        <DynamicIcon />
      </WrapperIcon>
      {showDrawer ? (
        <Inner right={right} left={left} className=" min-h-screen z-50">
          <Overllay onClick={() => handleCloseDrawer()} />
          <div className={`relativemy-6  z-40 w-full  ${DrawerClass}`}>
            <DrawerContent className={`z-50  ${DrawerContentClass}`}>
              <DrawerHeader>
                <div className={titleClass}>{title}</div>
              </DrawerHeader>
              <DrawerBody>{children}</DrawerBody>
              <DrawerFooter>{/* Translate */}</DrawerFooter>
            </DrawerContent>
          </div>
        </Inner>
      ) : null}
    </>
  );
};
