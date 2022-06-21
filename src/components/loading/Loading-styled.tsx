import styled from "styled-components";
import tw from "twin.macro";

export const LoadingBar = styled.div`
  .middle {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
  .bar {
    width: 7px;
    height: 50px;
    display: inline-block;
    transform-origin: bottom center;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    /*   box-shadow:5px 10px 20px inset rgba(255,23,25.2); */
    animation: loader 1.2s linear infinite;

    ${tw`bg-white dark:bg-settingHover`}
  }
  .bar1 {
    animation-delay: 0.1s;
  }
  .bar2 {
    animation-delay: 0.2s;
  }
  .bar3 {
    animation-delay: 0.3s;
  }
  .bar4 {
    animation-delay: 0.4s;
  }
  .bar5 {
    animation-delay: 0.5s;
  }
  .bar6 {
    animation-delay: 0.6s;
  }
  .bar7 {
    animation-delay: 0.7s;
  }
  .bar8 {
    animation-delay: 0.8s;
  }

  @keyframes loader {
    0% {
      transform: scaleY(0.1);
      background: #fff;
    }
    50% {
      transform: scaleY(1);
      background: rgb(252, 213, 53);
    }
    100% {
      transform: scaleY(0.1);
      ${tw`
        dark:bg-transparent bg-black      
      `}
    }
  }
`;
