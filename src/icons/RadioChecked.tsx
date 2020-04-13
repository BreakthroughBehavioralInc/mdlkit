import React, { FunctionComponent } from 'react';
import Svg from './Svg';
import { useTheme } from '../hooks';

interface Props {
  size: number;
  color?: string;
}

const RadioChecked: FunctionComponent<Props> = ({
  color,
  size,
  ...rest
}: Props) => {
  const theme = useTheme();
  const fillColor: string = color || theme.colors.black;

  return (
    <Svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      height={`${size}px`}
      width={`${size}px`}
      {...rest}
    >
      <path
        id="path-1_1_"
        fill={fillColor}
        d="M12,7c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S14.8,7,12,7z M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10 s10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S16.4,20,12,20z"
      />
    </Svg>
  );
};

export default RadioChecked;
