import styled from "styled-components";
import tw from "twin.macro";

const TooltipHead = styled.div`
  ${tw`relative flex flex-col items-center justify-center`}
`;
const TooltipBody = styled.div`
  .test:before {
  }
  ${tw`absolute bottom-1 text-center flex flex-col items-center hidden mb-8 group-hover:flex`}
`;
const Arrow = styled.div`
  content: "";
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 8px solid #5e6673;
  right: 50%;
  bottom: -10px;
  --webkit--transform: rotate(265deg);
  --moz--transform: rotate(265deg);
  --o--transform: rotate(265deg);
  transform: rotate(265deg);
`;

export { TooltipHead, TooltipBody, Arrow };
