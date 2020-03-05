import React, { FunctionComponent } from 'react';
import Svg from './Svg';
import { useTheme } from '../hooks';

interface Props {
  id: string;
  color?: string | null;
}

const CheckActive: FunctionComponent<Props> = ({ color, ...rest }: Props) => {
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
          id="Simplified-Reg-V3-Filled-calendar"
          transform="translate(-476.000000, -499.000000)"
          fill={color || theme.colors.primary}
        >
          <g
            id="checkboxes/active"
            transform="translate(476.000000, 499.000000)"
          >
            <path
              d="M2.99253976,0 L15.0074602,0 C16.6470745,0 18,1.33980569 18,2.99253976 L18,15.0074602 C18,16.6470745 16.6601943,18 15.0074602,18 L2.99253976,18 C1.35292554,18 0,16.6601943 0,15.0074602 L0,2.99253976 C0,1.35292554 1.33980569,0 2.99253976,0 Z M7,14 L16,5.34615385 L14.6,4 L7,11.3076923 L3.4,7.84615385 L2,9.19230769 L7,14 Z"
              id="Checkbox-active"
            />
          </g>
        </g>
      </g>
    </Svg>
  );
};

export default CheckActive;
