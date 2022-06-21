import styled from "styled-components";
import tw from "twin.macro";

const DataTable = styled.div`
  ${tw`
     flex flex-col border mt-5
    `};
`;
const Container = styled.div`
  ${tw`
  -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8
`}
`;
const Row = styled.div`
  ${tw`flex  items-center`}
`;

const Tables = styled.table`
  ${tw`
  min-w-full
  divide-y
  divide-gray-200
    `};
`;

const Thead = styled.thead``;

const Th = styled.th`
  white-space: nowrap;
  ${tw`font-normal ltr:text-left rtl:text-right ltr:pl-4 rtl:pr-4`}
`;
const Td = styled.td`
  white-space: nowrap;
  ${tw` ltr:text-left ltr:pl-4 rtl:text-right rtl:pr-4  font-thin
  `}
`;
const Tr = styled.tr`
  ${tw`h-16 w-full text-sm leading-none text-gray-800`};
`;
const Tbody = styled.tbody`
  ${tw`
  w-full
`};
`;
const Content = styled.div`
  ${tw`
  py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8
`};
`;
const UI = styled.div`
  ${tw`
  overflow-hidden
`};
`;

export {
  Container,
  Row,
  Thead,
  Tbody,
  Th,
  Tr,
  Tables,
  Td,
  UI,
  Content,
  DataTable,
};
