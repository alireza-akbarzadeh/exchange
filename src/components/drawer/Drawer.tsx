import styled from "styled-components";
import { css, keyframes } from "styled-components";
import { slideInRight, slideInLeft, fadeIn } from "react-animations";
import tw from "twin.macro";
const RightAnimate = keyframes`${slideInRight}`;
const LeftAnimate = keyframes`${slideInLeft}`;
const fadeOverlLay = keyframes`${fadeIn}`;

const Overllay = styled.div`
  z-index: -1;
  ${tw`opacity-20 top-0 right-0 fixed inset-0 bg-bgNavbar`}
  animation:${`0.4s ${fadeIn}`};
`;

const Inner = styled.div<DrawerContentProps>`
  ${tw`
    bg-settingHover
    fixed
    top-0
    w-full
    sm:w-6/12
    md:w-5/12
  `};
  animation: ${(props) => props.right && css`0.3s  ${RightAnimate}`};
  animation: ${(props) => props.left && css`0.3s ${LeftAnimate} `};
  right: ${(props) => props.right && css`0`};
  left: ${(props) => props.left && css`0`};
`;
const DrawerHeader = styled.div``;
const DrawerBody = styled.div``;
const DrawerFooter = styled.div``;
interface DrawerContentProps {
  right: boolean;
  left: boolean;
}
const DrawerContent = styled.div`
  ${tw`
    mx-4
`}
`;
const WrapperIcon = styled.button`
  svg {
    color: white;
    ${tw`text-white rtl:-ml-10  md:m-0 text-3xl font-thin`}
  }
`;

export {
  Inner,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerContent,
  WrapperIcon,
  Overllay,
};
