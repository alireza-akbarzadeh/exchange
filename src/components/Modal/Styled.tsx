import styled, { keyframes, css } from "styled-components";
import tw from "twin.macro";
import { pulse } from "react-animations";

const pulseAnimate = keyframes`${pulse}`;

const ModalTitle = styled.h3`
  ${tw`
  text-lg font-medium text-black 
  `};
`;
const ModalHeader = styled.div`
  ${tw`flex items-center justify-between px-4 py-2 rounded-t`}
`;
const ModalFooter = styled.div`
  ${tw`flex items-center justify-end p-6 rounded-b`}
`;
const ModalBody = styled.div`
  ${tw`relative px-6 flex-auto`}
`;

interface ModalContentProps {
  haveAnimate: boolean;
}

const ModalContent = styled.div<ModalContentProps>`
  animation: ${(props) => props.haveAnimate && css`0.3s ${pulseAnimate}`};
  ${tw`border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none`}
`;
const Modal = styled.div`
  ${tw`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}
`;

export { ModalContent, ModalTitle, ModalHeader, ModalFooter, ModalBody, Modal };
