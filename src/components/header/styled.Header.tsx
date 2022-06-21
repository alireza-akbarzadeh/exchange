import styled from "styled-components";
import tw from "twin.macro";

const List = styled.ul`
  ${tw`
  flex
 items-center
`};
`;
const ListItems = styled.li`
  ${tw`
 rtl:mr-4
 ltr:ml-4
 cursor-pointer
 text-sm
 text-textWhite
`};
`;
const Menu = styled.div`
  ${tw`
 w-full flex
 relative
 items-center
`};
`;
const SubMenu = styled.ul`
  ${tw`
  group-hover:block 
  absolute hidden h-auto
  transition-all
  duration-500
  ease-in-out
  z-50
`};
`;

const SubSetting = styled.ul`
  width: 21.2rem;
  ${tw`
  group-hover:block 
  absolute
  rtl:left-0
  ltr:right-0
  hidden h-auto
  transition-all
  duration-500
  ease-in-out
  z-50
`};
`;

const MenuContent = styled.div`
  transition: all 0.9s ease-in-auto;
  .Arrow_Hover:hover .Arrow_show {
    visibility: visible;
    opacity: 1;
    transform: translateX(-5px);
  }
  .Arrow_show {
    visibility: hidden;
    transform: translateX(155px);
    opacity: 0;
  }
  ${tw`
  top-5
  mt-6
  lg:right-0
  bg-HoverBg
  transition-all
  ease-in-out
  duration-1000
  rounded-lg
  px-6 
  z-50
  py-8
  shadow-lg
`};
`;

const Setting = styled.div`
  ${tw`
  top-5
  mt-6
  bg-settingHover
  transition-all
  ease-in-out
  duration-1000
  rounded-lg
  px-6 
  z-50
  py-8
  shadow-lg
`};
`;

interface IBtnProps {
  color?: string;
}
const ButtonMobile = styled.button<IBtnProps>`
  background-image: ${(props) =>
    props.color === "primary"
      ? `linear-gradient(rgb(248, 209, 47) 0%, rgb(240, 185, 11) 100%)`
      : `transparent`};
  ${tw`
   py-2
   px-4
   rounded-md
   text-sm
   w-full
   mt-2
`};
`;
const Button = styled.button`
  ${tw`
   py-2
   px-4
   rounded-md
   text-black
   text-sm
`};
`;

export {
  List,
  ListItems,
  Menu,
  SubMenu,
  Button,
  ButtonMobile,
  MenuContent,
  Setting,
  SubSetting,
};
