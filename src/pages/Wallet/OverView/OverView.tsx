import styled from "styled-components/macro";
import { css } from "styled-components";
import tw from "twin.macro";

const List = styled.ul`
  ${tw`flex flex-col xs:flex-row items-start  xl:items-center    justify-between xl:max-w-xl lg:max-w-xl mt-4 `}
`;
const ListItem = styled.li`
  &:first-of-type {
    color: #000;
  }
  ${tw`dark:text-white w-full`};
  a {
    ${tw`text-Link `};
  }
  span {
    ${tw`inline-flex ltr:mr-2 rtl:ml-2 h-6 items-center border border-gray-200`};
  }
`;
const Title = styled.h2`
  ${tw`text-xl md:text-3xl mt-10 dark:text-white`};
`;
const TableListItem = styled.li`
  ${tw` dark:bg-settingHover dark:border-settingHover space-y-5 md:space-y-0  flex  md:flex-row flex-col items-start md:items-center  justify-between border shadow-md  p-4 dark:hover:bg-HoverSuvMneu  hover:bg-red-50 dark:text-white`};
`;
const TableList = styled.ul`
  ${tw` space-y-5 `};
`;

interface IBtnProps {
  active?: boolean;
}

const Button = styled.button<IBtnProps>`
  ${({ active }) =>
    active
      ? css`
          &:first-of-type {
            border-color: #f4c61f;
          }

          box-shadow: none !important;
          background-image: linear-gradient(
            rgb(248, 209, 47) 0%,
            rgb(240, 185, 11) 100%
          );

          &:hover {
            box-shadow: none;
            background-image: linear-gradient(
              rgb(255, 226, 81) 0%,
              rgb(237, 196, 35) 100%
            );
          }
        `
      : css``};
  border: 1px solid #eee;
  box-shadow: rgb(234 236 239) 0 0 0 1px inset;
  ${tw`py-2 text-sm px-3   rounded-md rtl:mr-2 ltr:ml-2`}
`;

const Card = styled.div`
  ${tw`p-4 w-full shadow-md border mb-4   mt-10 dark:bg-settingHover dark:border-settingHover`};
`;
const Box = styled.div`
  ${tw` pt-3 p-4 border rounded-md col-span-6 md:col-span-3 dark:text-gray-50 dark:bg-settingHover dark:border-settingHover`};
`;
const Decsription = styled.p`
  margin: 0;
  min-width: 0;
  font-size: 12px;
  color: rgb(112, 122, 138);
  line-height: 20px;
  ${tw`
  lg:max-w-xs
  xl:max-w-full
  `};
`;
const SubTitle = styled.div`
  margin-bottom: 5px;
  min-width: 0;
  color: rgb(112, 122, 138);
  font-size: 14px;
  white-space: nowrap;

  svg {
    ${tw`
    rtl:ml-2 
    ltr:mr-2
    mt-1
    `};
  }
`;

const Text = styled.span`
  color: rgb(112, 122, 138);
`;
export {
  List,
  ListItem,
  Title,
  Button,
  Card,
  TableListItem,
  TableList,
  Box,
  Decsription,
  SubTitle,
  Text,
};
