import React from "react";
import {
  Container,
  Row,
  Thead,
  Tbody,
  Th,
  Tr,
  Tables,
  Td,
  Content,
  UI,
  DataTable,
} from "./Table";

const Table = ({ children, ...restProps }) => {
  return (
    <DataTable {...restProps}>
      <div
        className={
          "py-2 align-middle inline-block min-w-full max-w-xl sm:px-6 lg:px-8"
        }
      >
        {children}
      </div>
    </DataTable>
  );
};

export default Table;

Table.Container = function TableCotnainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Table.Tables = function TableCotnainer({ children, ...restProps }) {
  return (
    <Tables className={"table-fixed"} {...restProps}>
      {children}
    </Tables>
  );
};

Table.Row = function TableRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Table.Thead = function TableThead({ children, ...restProps }) {
  return <Thead {...restProps}>{children}</Thead>;
};

Table.Tbody = function TableTbody({ children, ...restProps }) {
  return <Tbody {...restProps}>{children}</Tbody>;
};

Table.Th = function TableTh({ children, ...restProps }) {
  return (
    <Th scope="col" {...restProps}>
      {children}
    </Th>
  );
};

Table.Tr = function TableTr({ children, ...restProps }) {
  return <Tr {...restProps}>{children}</Tr>;
};
Table.Td = function TableTd({ children, ...restProps }) {
  return <Td {...restProps}>{children}</Td>;
};
Table.Content = function TableSection({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};
Table.UI = function TableUI({ children, ...restProps }) {
  return <UI {...restProps}>{children}</UI>;
};
