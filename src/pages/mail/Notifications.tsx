import styled from "styled-components/macro";
import tw from "twin.macro";

const Bell = styled.div`
  left: 50%;
  ${tw`
  absolute
    top-16
    z-50
    w-14
    h-14
    mx-auto
    ml-6
    shadow-md
    p-5
    rounded-full
    bg-white
  `};
  svg {
    ${tw`text-primary-light text-xl`}
  }
`;
const Gird = styled.div`
  ${tw`
grid
sm:grid-cols-12
gap-20
`}
`;
const ColLeft = styled.div`
  ${tw`
col-span-3
`}
`;
const ColRight = styled.div`
  ${tw`
    col-span-9
`}
`;

const NotificationContainer = styled.div`
  ${tw`w-full px-4 mx-auto max-w-screen-xl`}
`;

const NotifactionHead = styled.div`
  ${tw`flex items-center justify-between mb-4`}
`;
const List = styled.ul`
  ${tw`
 flex items-center justify-between cursor-pointer`}
`;
const ListItem = styled.li`
  ${tw` relative `}
  .Hover_List {
    ${tw`hover:border-primary hover:text-primary border mx-2 rounded-md transition-all ease-in-out duration-300 px-2 py-2  text-black`}
  }
`;
const Title = styled.h3`
  ${tw`text-xl md:text-3xl font-bold`}
`;

const Tab = styled.ul`
  ${tw`space-y-7`}
`;
const TabItem = styled.li`
  ${tw`flex items-center cursor-pointer`}

  svg {
    ${tw`
    text-primary-light
    text-xl
    ltr:mr-3
    rtl:ml-3
    `}
  }
`;

export {
  NotificationContainer,
  Gird,
  ColLeft,
  ColRight,
  NotifactionHead,
  ListItem,
  List,
  Title,
  Tab,
  TabItem,
  Bell,
};
