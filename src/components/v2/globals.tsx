import React from 'react';

interface ChevronIconProps {
  color?: string;
  open?: boolean;
  size?: string;
  dir?: 'vertical' | 'horizontal';
}

export const CheckIcon = ({
  color = '#0379ce',
  size = '12px',
}: {
  color?: string;
  size?: string;
}) => {
  return (
    <svg
      style={{ width: size, height: size }}
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.79508 10.875L1.62508 6.70504L0.205078 8.11504L5.79508 13.705L17.7951 1.70504L16.3851 0.295044L5.79508 10.875Z"
        fill={color}
      />
    </svg>
  );
};

export const ChevronIcon = ({
  color = '#0379CE',
  open = false,
  size = '24px',
  dir = 'vertical',
}: ChevronIconProps) => {
  return (
    <svg
      style={{
        height: size,
        width: size,
        transform:
          dir === 'vertical'
            ? `rotate(${open ? 180 : 0}deg)`
            : `rotate(${open ? 270 : 90}deg)`,
        transition: 'transform 0.15s ease-in-out',
      }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.2949 9.70492L16.8849 8.29492L12.2949 12.8749L7.70492 8.29492L6.29492 9.70492L12.2949 15.7049L18.2949 9.70492Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.2949 9.70492L16.8849 8.29492L12.2949 12.8749L7.70492 8.29492L6.29492 9.70492L12.2949 15.7049L18.2949 9.70492Z"
        fill={color}
        fillOpacity="0.2"
      />
    </svg>
  );
};

export const CrossOutlineIcon = ({ color = '#000' }: { color?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
        fill={color}
      />
    </svg>
  );
};
