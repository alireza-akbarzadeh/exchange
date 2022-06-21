import styled, { css } from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`w-full max-w-screen-lg mx-auto px-4`}
`;

interface Props {
  xl?: boolean;
  lg?: boolean;
  md?: boolean;
}

const Title = styled.h3<Props>`
  ${tw` font-medium text-center my-10`};
  ${({ xl }) =>
    xl &&
    css`
      font-size: 30px;
    `}
  ${({ lg }) =>
    lg &&
    css`
      font-size: 20px;
    `}
  ${({ md }) =>
    md &&
    css`
      font-size: 25px;
    `}
`;

interface IBtnProps {
  active?: boolean;
}
const Button = styled.button<IBtnProps>`
  ${tw`w-full py-4 mt-10  rounded-md`};
  ${({ active }) =>
    active
      ? css`
          ${tw`bg-primary-light`}
        `
      : css`
          ${tw`bg-gray-200`}
        `}
`;

export { Container, Title, Button };
