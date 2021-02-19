import React, { StatelessComponent } from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
`;

const StyledSvg = styled.svg`
  animation: ${spin} 1s linear infinite;

  height: 1rem;
  width: auto;
  line-height: 0;
  opacity: 1;
  color: ${({ theme }) => theme.colors.primaryText};
`;

const StyledCircle = styled.circle`
  opacity: 0.25;
`;

const StyledPath = styled.path`
  opacity: 0.75;
`;

const LoadingIcon: StatelessComponent = () => (
  <StyledSvg
    className="animate-spin h-5 w-5 text-white mx-8"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <StyledCircle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></StyledCircle>
    <StyledPath
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></StyledPath>
  </StyledSvg>
);

export default LoadingIcon;
