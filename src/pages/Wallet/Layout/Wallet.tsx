import styled from "styled-components/macro";
import tw from "twin.macro";
import { css } from "styled-components";

const Container = styled.div`
  ${tw` px-4 max-w-full w-full mx-2`}
`;
const Title = styled.h3``;
const Row = styled.div`
  ${tw`grid md:grid-cols-12 gap-0 lg:gap-0 xl:gap-20  w-full`};
`;
const ColLeft = styled.div`
  ${tw`lg:col-span-2 md:col-span-4  col-span-12`};
`;
const Header = styled.div``;

const ColRight = styled.div`
  ${tw`lg:col-span-10 md:col-span-8 col-span-12`};
`;
const Main = styled.div``;

const List = styled.ul`
  ${tw`xl:space-y-2  flex md:block`};
`;
const SideBar = styled.div`
  @media (min-width: 769px) {
    background: #fff;
  }
  background: #12161c;
  ${tw`lg:min-h-screen md:h-auto dark:bg-settingHover   dark:lg:border-settingHover max-w-full   w-full ltr:lg:border-r-2 rtl:lg:border-l-2 lg:border-gray-200`};
`;

interface IProps {
  active?: boolean;
}
const ListItem = styled.li<IProps>`
  ${tw`px-12 py-4 flex  relative  cursor-pointer  font-medium items-center`};

  ${({ active }) =>
    active &&
    css`
      ${tw`lg:bg-gray-100 text-white dark:bg-settingHover dark:text-gray-50`}
    `};

  a {
    @media (min-width: 769px) {
      font-size: 17px;
      color: #000;
    }
    font-size: 15px;
    white-space: nowrap;
    color: ${(props) => (props.active ? "#fff" : "#535c68")};
  }
  svg {
    ${tw`font-bold w-5 h-5  ltr:mr-2 absolute ltr:left-3 rtl:right-3`};
  }
`;
export {
  Container,
  Row,
  ColLeft,
  ColRight,
  Main,
  SideBar,
  Header,
  List,
  Title,
  ListItem,
};
