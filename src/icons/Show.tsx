import React, { FunctionComponent } from 'react';
import Svg from './Svg';
import { useTheme } from '../hooks';

export interface ShowProps {
  color?: string;
}

const Show: FunctionComponent<ShowProps> = ({ color, ...rest }: ShowProps) => {
  const theme = useTheme();
  return (
    <Svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...rest}
    >
      <title>Icons/show</title>
      <desc>Created with Sketch.</desc>
      <g
        id="Icons/show"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M12,5 C17,5 21.27,8.11 23,12.5 C21.27,16.89 17,20 12,20 C7,20 2.73,16.89 1,12.5 C2.73,8.11 7,5 12,5 Z M12,17.5 C14.76,17.5 17,15.26 17,12.5 C17,9.74 14.76,7.5 12,7.5 C9.24,7.5 7,9.74 7,12.5 C7,15.26 9.24,17.5 12,17.5 Z M12,9.5 C13.66,9.5 15,10.84 15,12.5 C15,14.16 13.66,15.5 12,15.5 C10.34,15.5 9,14.16 9,12.5 C9,10.84 10.34,9.5 12,9.5 Z"
          id="eye-show"
          fill={color || theme.colors.gray}
        />
      </g>
    </Svg>
  );
};

export default Show;
