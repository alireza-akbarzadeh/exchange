import styled from "styled-components";
import tw from "twin.macro";

const Row = styled.div`
  ${tw` grid sm:grid-cols-6 gap-5 md:gap-40 `}
`;
const Tab = styled.div``;
const FormContainer = styled.div`
  min-height: 80vh;
  ${tw`grid place-items-center items-center  `}
`;
const ColRight = styled.div`
  ${tw`col-span-4 `}
`;
const ColLeft = styled.div`
  ${tw`col-span-2`}
`;
const FormControl = styled.div`
  ${tw` mt-6 mb-6`}
`;

const Lable = styled.label`
  ${tw` text-base mb-2 font-medium `}
`;
const Input = styled.input`
  ${tw`w-full dark:text-white border-2 border-gray-200 px-2 rounded-sm outline-none py-2 ring-gray-50 ring-1  focus:ring-2 focus:ring-primary-light hover:border-primary-light hover:border-2 dark:bg-transparent dark:border-borderColor`}
`;
const Button = styled.button`
  background-color: #fcd535;
  ${tw`w-full  border-gray-300 px-2 outline-none rounded-md border-0 py-3 `}
`;

export {
  Row,
  ColLeft,
  ColRight,
  FormControl,
  Input,
  Button,
  Tab,
  FormContainer,
  Lable,
};
