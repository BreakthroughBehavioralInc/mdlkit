import React, { FunctionComponent } from 'react';
import Svg from './Svg';
import { useTheme } from '../hooks';

interface Props {
  id: string;
  color?: string | null;
}

const CheckEmpty: FunctionComponent<Props> = ({ color, ...rest }: Props) => {
  const theme = useTheme();
  return (
    <Svg
      width="18px"
      height="18px"
      viewBox="0 0 18 18"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...rest}
    >
      <g
        id="Simplified-registration"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Simplified-Reg-V3"
          transform="translate(-476.000000, -500.000000)"
          stroke={color || theme.colors.gray}
        >
          <rect x="476.5" y="500.5" width="17" height="17" rx="3" />
        </g>
      </g>
    </Svg>
  );
};

export default CheckEmpty;
