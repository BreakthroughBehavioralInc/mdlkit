import React from 'react';
import { Spinner } from './styled';

interface Props {
  color?: string;
  size?: number;
  speed?: string;
  startPosition?: 'topRight' | 'topLeft';
  direction?: 'cw' | 'ccw';
}

const LoadingSpinner = ({
  color = '#0379ce',
  size = 72,
  speed = '2s',
  startPosition = 'topRight',
  direction = 'cw',
}: Props) => {
  return (
    <Spinner
      color={color}
      size={size}
      speed={speed}
      startPosition={startPosition}
      direction={direction}
    />
  );
};

export default LoadingSpinner;
