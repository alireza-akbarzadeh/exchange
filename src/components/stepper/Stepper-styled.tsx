import styled, { css } from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`flex  w-full mt-10 `}
`;

interface Props {
  active?: boolean;
}

const Step = styled.div<Props>`
  ${tw`relative flex-1 transition-all duration-300 ease-in-out `}
  &:before {
    ${tw`ltr:ml-4`};
    content: "";
    position: absolute;
    border: 2px solid #eee;
    width: calc(100% - 20%);
    left: 50%;
    right: 50%;
    bottom: 50%;
    transform: translate(-50%, -50%);
    height: 2px;
    z-index: 1;
    top: 50%;

    ${(props) =>
      props.active &&
      css`
        ${tw`border-primary-dark`}
        border: 2px solid gold;
      `}
  }

  &:last-of-type:before {
    border-color: transparent;
  }

  span {
    ${tw`bg-gray-200 w-8 z-50 h-8 flex items-center justify-center  rounded-full`};
    ${({ active }) =>
      active &&
      css`
        ${tw`bg-primary-light`}
      `}
  }
`;

export { Container, Step };
