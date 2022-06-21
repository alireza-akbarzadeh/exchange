import styled, { css } from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

const Container = styled.div`
  ${tw`px-4 w-full`}
`;
const Header = styled.div`
  ${tw`flex flex-col xl:flex-row items-start   xl:items-center justify-between mt-7`}
`;
const Title = styled.h2`
  ${tw`
  xl:text-3xl
  lg:text-xl
  text-base
  font-medium
  `};
`;

interface IBtnProps {
  active?: boolean;
}

const Button = styled.button<IBtnProps>`
  box-shadow: rgb(234 236 239) 0px 0px 0px 1px inset;
  white-space: nowrap;
  ${({ active }) =>
    active
      ? css`
          &:first-of-type {
            border-color: #f4c61f;
          }

          background-image: linear-gradient(
            rgb(248, 209, 47) 0%,
            rgb(240, 185, 11) 100%
          );
          box-shadow: unset;

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
  ${tw`p-2 text-sm px-6  rounded-md rtl:mr-2 ltr:ml-2`}
`;

const List = styled.ul`
  ${tw` max-w-xs md:max-w-full    flex lg:items-center items-start  overflow-x-scroll md:overflow-auto mt-2 flex-row justify-between lg:mt-2 xl:mt-0 `}
`;
const ListItem = styled.li``;
const ItemLink = styled(Link)`
  ${tw`text-Link text-sm`}
`;

export { Container, Title, Button, Header, List, ListItem, ItemLink };
