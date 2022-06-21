import styled from "styled-components";
import { css } from "styled-components";

import tw from "twin.macro";

const Header = styled.div`
  ${tw`
     mt-6 w-full  flex  justify-between items-center px-4  
  `}
`;

const Title = styled.h2`
  ${tw`text-xs md:text-xl dark:text-darkMode`}
`;

interface IColorProps {
  color?: boolean;
}

const Item = styled.div<IColorProps>`
  ${tw`flex items-center px-2 text-lg`}
  background-color${({ color }) => color && "#eee"}
  svg {
    font-size: 25px;
  }
`;

const Container = styled.div`
  ${tw`max-w-screen-2xl mx-auto px-4`}
`;

const Row = styled.div`
  ${tw`grid md:grid-cols-12 gap-10 mt-8 mb-24`}
`;

const Form = styled.form``;
const FormControl = styled.div`
  position: relative;
  label {
    margin: 10px 0;
    display: block;
  }
`;
const Input = styled.input`
  ${tw`
  w-full border rounded-md px-4 py-2 outline-none focus:border-primary-light hover:border-primary-light dark:text-darkMode dark:bg-transparent
  `}
`;
const Memo = styled.div`
  ${tw` p-1 rounded-lg  flex items-start md:items-center space-y-3 md:space-y-0  flex-col md:flex-row`}
  input {
    flex: 1;
  }

  span {
    flex: 1;
    font-size: 13px;
    background-color: rgb(238, 232, 170);
    border-radius: 15px;
    ${tw`py-1 px-2 ltr:ml-2 rtl:mr-2`}
  }
`;
const FAQ = styled.div`
  margin-top: 40px;
  ul {
    ${tw`space-y-5 mt-4`}
    li {
      ${tw`flex items-center  text-Gray text-sm  md:text-base`};
      span {
        ${tw`underline`};
      }
      svg {
        ${tw` ltr:mr-2 rtl:ml-2`};
      }
    }
  }
`;
const Code = styled.div`
  ${tw`w-full  rounded-md px-4 py-2 text-xs md:text-base `}
`;
export {
  Header,
  Title,
  Item,
  Container,
  Row,
  Form,
  FormControl,
  Input,
  Memo,
  FAQ,
  Code,
};
