import styled from '@emotion/styled';

export const SpinnerContainer = styled.div`
  & > g {
    transform-origin: center;
    animation: spinner 2s linear infinite;
  }

  & > g circle {
    stroke-linecap: round;
    animation: spinner-circle 1.5s ease-in-out infinite;
  }

  @keyframes spinner {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spinner-circle {
    0% {
      stroke-dasharray: 0 150;
      stroke-dashoffset: 0;
    }
    47.5% {
      stroke-dasharray: 42 150;
      stroke-dashoffset: -16;
    }
    95%,
    100% {
      stroke-dasharray: 42 150;
      stroke-dashoffset: -59;
    }
  }
`;