import styled, { keyframes, css } from 'styled-components';

export const clockWise = keyframes`
0% {
      clip-path: polygon(50% 50%,0 0,0    0,0    0   ,0    0   ,0    0   );
   }
   25% {
      clip-path: polygon(50% 50%,0 0,100% 0,100% 0   ,100% 0   ,100% 0   );
   }
   50% {
      clip-path: polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%);
   }
   75% {
      clip-path: polygon(50% 50%,0 0,100% 0,100% 100%,0    100%,0    100%);
   }
   100% {
      clip-path: polygon(50% 50%,0 0,100% 0,100% 100%,0    100%,0    0   );
   }
`;

export const counterClockwise = keyframes`
0% {
      clip-path: polygon(50% 50%,0 0,0    0,0    0   ,0    0   ,0    0   );
   }
   25% {
      clip-path: polygon(50% 50%,0 0,0 100%,0 100%,0 100%,0 100%);
   }
   50% {
      clip-path: polygon(50% 50%,0 0,0 100%,100% 100%, 100% 100%, 100% 100%);
   }
   75% {
      clip-path: polygon(50% 50%,0 0,0 100%,100% 100%, 100% 0, 100% 0);
   }
   100% {
      clip-path: polygon(50% 50%,0 0,0 100%,100% 100%, 100% 0, 0 0);
   }
`;

export interface SpinnerProps {
  color: string;
  size: number;
  speed: string;
  startPosition: 'topRight' | 'topLeft';
  direction: 'cw' | 'ccw';
}

export const Spinner = styled.div<SpinnerProps>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border: 5px solid #eaeaeb;
  border-radius: 50%;
  position: relative;
  transform: ${({ startPosition }) =>
    startPosition === 'topLeft' ? 'rotate(-135deg)' : 'rotate(45deg)'};

  &:before {
    content: '';
    position: absolute;
    inset: -5px;
    border-radius: 50%;
    border: 5px solid ${({ color }) => `${color}`};
    animation: ${({ direction, speed }) =>
      css`
        ${direction === 'ccw'
          ? counterClockwise
          : clockWise} ${speed} infinite linear
      `};
  }
`;
