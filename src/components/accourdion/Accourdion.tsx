import styled from "styled-components";
import { keyframes } from "styled-components";
import tw from "twin.macro";

import { slideInDown } from "react-animations";
const slide = keyframes`${slideInDown}`;

const Inner = styled.div``;
const AccordionHeader = styled.div`
  ${tw`flex items-center justify-between py-3`}
`;
const AccordionBody = styled.div``;
const AccordionContent = styled.div`
  /* animation: 0.3s ${slide}; */
`;
const WrapperIcon = styled.div`
  ${tw`
  flex
  items-center
  `}
  svg {
    ${tw`text-lg mt-1 text-textGray`}
  }
  button {
    ${tw`
    mt-1
    rtl:mr-2
    ltr:ml-2
    `}
  }
`;

export { Inner, AccordionBody, AccordionHeader, AccordionContent, WrapperIcon };
