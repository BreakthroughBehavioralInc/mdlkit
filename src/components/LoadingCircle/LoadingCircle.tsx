import React, { StatelessComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import Box, { BoxProps } from '../Box/Box';

const fade = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const backgroundColor = props =>
  props.color ? { background: props.theme[props.color] } : null;

const Spinner = styled.div<{ color?: string }>`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;

  & > div {
    transform-origin: 32px 32px;
    animation: ${fade} 1.2s linear infinite;

    &:after {
      content: ' ';
      display: block;
      position: absolute;
      top: 3px;
      left: 29px;
      width: 5px;
      height: 14px;
      border-radius: 20%;
      ${backgroundColor}
    }

    &:nth-child(1) {
      transform: rotate(0deg);
      animation-delay: -1.1s;
    }

    &:nth-child(2) {
      transform: rotate(30deg);
      animation-delay: -1s;
    }

    &:nth-child(3) {
      transform: rotate(60deg);
      animation-delay: -0.9s;
    }

    &:nth-child(4) {
      transform: rotate(90deg);
      animation-delay: -0.8s;
    }

    &:nth-child(5) {
      transform: rotate(120deg);
      animation-delay: -0.7s;
    }

    &:nth-child(6) {
      transform: rotate(150deg);
      animation-delay: -0.6s;
    }

    &:nth-child(7) {
      transform: rotate(180deg);
      animation-delay: -0.5s;
    }

    &:nth-child(8) {
      transform: rotate(210deg);
      animation-delay: -0.4s;
    }

    &:nth-child(9) {
      transform: rotate(240deg);
      animation-delay: -0.3s;
    }

    &:nth-child(10) {
      transform: rotate(270deg);
      animation-delay: -0.2s;
    }

    &:nth-child(11) {
      transform: rotate(300deg);
      animation-delay: -0.1s;
    }

    &:nth-child(12) {
      transform: rotate(330deg);
      animation-delay: 0s;
    }
  }
`;

type Props = {
  color?: string;
} & BoxProps;

const LoadingCircle: StatelessComponent<Props> = ({
  color,
  ...rest
}: Props) => (
  <Box {...rest}>
    <Spinner color={color}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </Spinner>
  </Box>
);

LoadingCircle.displayName = 'LoadingCircle';
LoadingCircle.defaultProps = {
  color: 'primary',
};

export default LoadingCircle;
