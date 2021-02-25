import React, { StatelessComponent } from 'react';
import styled, { keyframes } from 'styled-components';

const heartbeatAnimation = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const circleAnimation = keyframes`
  25% {
    stroke-dashoffset: 283;
    transform: rotate(-90deg);
  }
  50%,
  75% {
    stroke-dashoffset: 0;
    transform: rotate(-90deg);
  }

  100% {
    stroke-dashoffset: 283;
    transform: rotate(270deg)
  }
`;

const StyledSvg = styled.svg<{ width?: string; height?: string }>`
  display: block;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: auto;
`;

const StyledPath = styled.path<{
  animation?: string;
  delay?: number;
  strokeWidth?: number;
  strokeColor: string;
}>`
  animation: 2.5s ${({ animation }) => animation} infinite ${heartbeatAnimation};
  animation-delay: ${({ delay = 1 }) => delay}s;
  fill: transparent;
  stroke: ${({ strokeColor, theme }) =>
    theme.colors[strokeColor] || strokeColor};
  stroke-linejoin: round;
  stroke-width: ${({ strokeWidth = 4 }) => strokeWidth}px;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
`;

const StyledCircle = styled.circle<{
  delay?: number;
  isOpacity?: boolean;
  strokeColor: string;
}>`
  animation: 2.5s ease-in infinite ${circleAnimation};
  animation-delay: ${({ delay = 0 }) => delay}s;
  fill: transparent;
  stroke: ${({ strokeColor, theme }) =>
    theme.colors[strokeColor] || strokeColor};
  stroke-dasharray: 283;
  stroke-dashoffset: 283;
  stroke-width: 5px;
  transform-origin: 50% 50%;
  transform: rotate(-90deg);
  ${({ isOpacity }) => isOpacity && 'opacity:0.5;'}
`;

interface LoadingIconProps {
  width?: string;
  height?: string;
  color: string;
  backgroundColor: string;
}

const LoadingIcon: StatelessComponent<LoadingIconProps> = ({
  width,
  height,
  color,
  backgroundColor,
}: LoadingIconProps) => (
  <StyledSvg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
  >
    <StyledPath
      d="M95,50 L72.5,50 L61.25,27.5 L38.75,72.5 L27.5,50 L5,50"
      animation="ease"
      strokeColor={color}
    />
    <StyledPath
      d="M95,50 L72.5,50 L61.25,27.5 L38.75,72.5 L27.5,50 L5,50"
      animation="ease-in-out"
      delay={1.2}
      strokeWidth={6}
      strokeColor={backgroundColor}
    />
    <StyledCircle cx="50" cy="50" r="45" strokeColor={color} />
    <StyledCircle
      cx="50"
      cy="50"
      r="45"
      delay={0.1}
      strokeColor={color}
      isOpacity
    />
  </StyledSvg>
);

LoadingIcon.defaultProps = {
  width: '100%',
  height: '100%',
  color: 'primaryText',
  backgroundColor: 'primary',
};

export default LoadingIcon;
